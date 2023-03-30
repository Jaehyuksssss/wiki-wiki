import AddModal from '@src/components/atoms/Modal/AddModal'
import { clickedButton } from '@src/components/recoil/HomeStore'
import React from 'react'
import { useRecoilState } from 'recoil'
import styled from 'styled-components'
import LectureSubject from './LectureSubject'

export default function LectureInfo() {
  const [openModal, setOpenModal] = useRecoilState(clickedButton)
  return (
    <Container>
      <ContentsWrapper>
        <LectureSubject />
      </ContentsWrapper>
    </Container>
  )
}

const Container = styled.div`
  margin-top: 50px;
`

const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f0eeee;
  margin: 0px 50px 50px 50px;
`
