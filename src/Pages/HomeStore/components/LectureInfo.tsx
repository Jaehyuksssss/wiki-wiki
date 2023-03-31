import AddModal from '@src/components/atoms/Modal/AddModal'
import { clickedButton } from '@src/components/recoil/HomeStore'
import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import styled from 'styled-components'
import LectureSubject from './LectureSubject'
import ReactPaginate from 'react-paginate'

export default function LectureInfo() {
  const [openModal, setOpenModal] = useRecoilState(clickedButton)
  const [pageNumber, setPageNumber] = useState(0)

  const itemsPerPage = 5
  // const pageCount = Math.ceil(items.length / itemsPerPage)

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
