import React from 'react'
import styled from 'styled-components'
import LectureContents from './LectureContents'
import LectureSubject from './LectureSubject'

export default function LectureInfo() {
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
