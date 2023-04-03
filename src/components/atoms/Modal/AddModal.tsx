import { clickedButton, lectureList } from '@src/components/recoil/HomeStore'
import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import styled from 'styled-components'
import { API, graphqlOperation } from 'aws-amplify'
import { createLectures } from '@src/graphql/mutations'
export default function AddModal() {
  const [openModal, setOpenModal] = useRecoilState(clickedButton)
  const [lectureListData, setLectureListData] = useRecoilState(lectureList)
  const [lectureInput, setLectureInput] = useState({
    id: '',
    title: '',
    content: '',
    period: 0,
    price: 0,
    currency_code: 'KRW',
  })
  console.log(lectureListData)

  const handleListData = () => {
    setLectureListData((prevState) =>
      prevState ? [...prevState, lectureInput] : [lectureInput],
    )
  }
  const handleCloseModal = () => {
    setOpenModal(false)
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    const newValue = name === 'price' ? parseInt(value) : value
    setLectureInput((prevState) => ({
      ...prevState,
      [name]: newValue,
    }))
  }

  const handleCreateLecture = async () => {
    try {
      await API.graphql(
        graphqlOperation(createLectures, { input: lectureInput }),
      )
      handleListData()
      handleCloseModal()
      window.location.reload()
    } catch (error) {
      console.log('error creating lecture: ', error)
    }
  }

  return (
    <ModalContainer>
      <CloseButton onClick={handleCloseModal}>
        <CloseIcon />
      </CloseButton>
      <TitleInput
        placeholder="ID"
        name="id"
        type="number"
        value={lectureInput.id}
        onChange={handleInputChange}
      />
      <TitleInput
        placeholder="Title"
        name="title"
        value={lectureInput.title}
        onChange={handleInputChange}
      />
      <ContentInput
        placeholder="Content"
        name="content"
        value={lectureInput.content}
        onChange={handleInputChange}
      />
      <TitleInput
        placeholder="Period"
        name="period"
        type="number"
        value={lectureInput.period}
        onChange={handleInputChange}
      />
      <TitleInput
        placeholder="Price"
        name="price"
        type="number"
        value={lectureInput.price}
        onChange={handleInputChange}
      />
      <Button onClick={handleCreateLecture}>SUBMIT</Button>
    </ModalContainer>
  )
}

const ModalContainer = styled.div`
  background: white;
  width: 700px;
  height: 500px;
  position: absolute;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const TitleInput = styled.input`
  width: 90%;
  height: 40px;
  margin-bottom: 20px;
  padding: 10px;
  font-size: 18px;
  border-radius: 5px;
  border: 1px solid #ccc;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`

const ContentInput = styled.input`
  width: 90%;
  height: 150px;
  margin-bottom: 20px;
  padding: 10px;
  font-size: 18px;
  border-radius: 5px;
  border: 1px solid #ccc;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  resize: none;
`

const Button = styled.button`
  width: 180px;
  height: 50px;
  font-size: 20px;
  font-family: 'Nanum Gothic';
  color: white;
  line-height: 50px;
  text-align: center;
  background-color: #8b89e5;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 20px;
`
const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  outline: none;
`
const CloseIcon = styled.span`
  display: block;
  width: 25px;
  height: 25px;
  position: relative;

  &::before,
  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 30px;
    height: 2px;
    background-color: black;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
`
