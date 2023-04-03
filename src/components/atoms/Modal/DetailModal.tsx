import { GraphQLQuery, GraphQLResult } from '@aws-amplify/api'
import { UpdateLecturesMutation } from '@src/API'
import { Lecture, LectureDetail } from '@src/components/interfaces'
import {
  parseLectureData,
  lectureSelected,
  openDetailModal,
  lectureList,
} from '@src/components/recoil/HomeStore'
import { createLectures, updateLectures } from '@src/graphql/mutations'
import { getLectures } from '@src/graphql/queries'
import LectureInfo from '@src/Pages/HomeStore/components/LectureInfo'
import { Pagination } from '@src/Pages/HomeStore/components/Pagination'
import { API, graphqlOperation } from 'aws-amplify'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import styled from 'styled-components'

export default function DetailModal() {
  const [selectedLecture, setSelectedLecture] = useRecoilState(lectureSelected)
  const [detailModal, setDetailModal] = useRecoilState(openDetailModal)
  const [parseData, setparseData] = useRecoilState(parseLectureData)
  const [lectureListData, setLectureListData] = useRecoilState(lectureList)
  const [editMode, setEditMode] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [lecturesPerPage, setLecturesPerPage] = useState(5)
  const [lectureInput, setLectureInput] = useState({
    id: '',
    title: '',
    content: '',
    period: 0,
    price: 0,
    currency_code: 'KRW',
    date: '',
  })
  console.log('p', parseData)

  //pagination
  const indexOfLastLecture = currentPage * lecturesPerPage
  const indexOfFirstLecture = indexOfLastLecture - lecturesPerPage
  const currentLectures = parseData?.items?.slice(
    indexOfFirstLecture,
    indexOfLastLecture,
  )

  // Change page
  const paginate = (pageNumber: React.SetStateAction<number>) =>
    setCurrentPage(pageNumber)
  // 선택된 강의 데이터
  const lecture = parseData.items?.find(
    (lecture) => parseInt(lecture.id) === selectedLecture,
  )

  useEffect(() => {
    // this effect will trigger every time `editMode` or `data` changes
    console.log('component re-rendered')
  }, [editMode, lecture])

  //hooks
  const handleListData = () => {
    setLectureListData((prevState) =>
      prevState ? [...prevState, lectureInput] : [lectureInput],
    )
  }
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    const newValue = name === 'price' ? parseInt(value) : value
    setLectureInput((prevState) => ({
      ...prevState,
      [name]: newValue,
    }))
  }

  //editmode
  const handleCloseModal = () => {
    setDetailModal(false)
  }

  const handleEditMode = () => {
    setEditMode(true)
  }

  const handleEditComplete = async () => {
    try {
      const updatedData = await API.graphql<
        GraphQLQuery<UpdateLecturesMutation>
      >(
        graphqlOperation(updateLectures, {
          input: {
            id: lectureInput.id,
            title: lectureInput.title,
            content: lectureInput.content,
            period: lectureInput.period,
            price: lectureInput.price,
            date: lectureInput.date,
          },
        }),
      )

      setparseData(
        (prevData) =>
          ({
            ...prevData,
            items: updatedData || [],
          } as Partial<LectureDetail>),
      )

      handleListData()
      setEditMode(false)
      handleCloseModal()
    } catch (error) {
      console.log('error creating lecture: ', error)
    }
  }

  return (
    <ModalContainer>
      {lecture && (
        <>
          <CloseButton onClick={handleCloseModal}>
            <CloseIcon />
          </CloseButton>
          {editMode ? ( // 수정 모드일 때
            <>
              <InputTitle>강의 제목</InputTitle>
              <Input
                defaultValue={lecture.title}
                onChange={handleInputChange}
              />
              <InputTitle>강의 내용</InputTitle>
              <Input
                defaultValue={lecture.content}
                onChange={handleInputChange}
              />
              <InputTitle>강의 가격</InputTitle>
              <Input
                defaultValue={lecture.price}
                onChange={handleInputChange}
              />
              <InputTitle>강의 기간</InputTitle>
              <Input
                defaultValue={`${lecture.createdAt} ~ ${lecture.updatedAt}`}
                onChange={handleInputChange}
              />
              <EditCompleteButton onClick={handleEditComplete}>
                수정 완료
              </EditCompleteButton>
            </>
          ) : (
            // 수정 모드가 아닐 때
            <>
              <Date>{lecture.date}</Date>
              <Title>강의 제목</Title>
              <Text>{lecture.title}</Text>
              <Title>강의 내용</Title>
              <Text>{lecture.content}</Text>
              <Title>강의 가격</Title>
              <Text>{lecture.price}</Text>
              <Title>강의 기간</Title>
              <Text>{`${lecture.createdAt} ~ ${lecture.updatedAt}`}</Text>
            </>
          )}
          {!editMode && (
            <EditButton
              onClick={
                handleEditMode // 수정 모드가 아닐 때에만 Edit 버튼 표시
              }
            >
              Edit
            </EditButton>
          )}
        </>
      )}
      <LectureInfo currentLectures={currentLectures} />
      <Pagination
        lecturesPerPage={lecturesPerPage}
        totalLectures={parseData?.items ? parseData.items.length : 0}
        paginate={paginate}
        currentPage={currentPage}
      />
    </ModalContainer>
  )
}

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  width: 80%;
  max-width: 600px;
  height: 80%;
  max-height: 600px;
  background-color: white;
  border-radius: 10px;
  overflow-y: auto;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
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

export const InputTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-top: 20px;
`

export const Input = styled.input`
  width: 100%;
  margin-top: 10px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
`

export const Date = styled.div`
  font-size: 14px;
  color: #999;
`

export const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-top: 20px;
`

export const Text = styled.div`
  font-size: 16px;
  margin-top: 10px;
`

export const EditButton = styled.button`
  display: flex;
  align-items: center;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  margin-top: 20px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #3e8e41;
  }
`
const EditCompleteButton = styled.button`
  margin-top: 10px;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  background-color: #2f80ed;
  color: #fff;
  cursor: pointer;
`
