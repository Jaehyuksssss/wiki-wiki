import { LectureDetailParams } from '@src/components/constant'
import { func } from 'prop-types'
import React from 'react'
import styled from 'styled-components'

export default function LectureContents({
  id,
  title,
  period,
  price,
  date,
  contents,
}: LectureDetailParams) {
  return (
    <Container>
      <Span>{id}</Span>
      <Span> {title}</Span>
      <Span> {period}</Span>
      <Span> {price}</Span>
      <Span>{date}</Span>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
`
const Span = styled.span``
