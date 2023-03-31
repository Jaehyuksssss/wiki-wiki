import LectureSubject from '@src/Pages/HomeStore/components/LectureSubject'
import React from 'react'
import styled from 'styled-components'

interface LectureDetailProps {
  title: string
  content: string
}

export default function LectureDetail({ title, content }: LectureDetailProps) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Content>{content}</Content>
      <LectureSubject />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 24px;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
`

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #333333;
  margin-bottom: 16px;
`

const Content = styled.p`
  font-size: 16px;
  line-height: 1.5;
  color: #666666;
  margin-top: 8px;
  text-align: justify;
`
