// import { LectureParmas } from '@src/components/constant'
import { LectureDetail } from '@src/components/constant'
import React from 'react'
import styled from 'styled-components'

export default function LectureTitle() {
  return (
    <Table>
      <thead>
        <Tr>
          <Th>ID</Th>
          <Th>Title</Th>
          <Th>Period</Th>
          <Th>Price</Th>
          <Th>Date</Th>
        </Tr>
      </thead>
      <tbody>
        {LectureDetail.map((lecture) => (
          <Tr key={lecture.id}>
            <Td>{lecture.id}</Td>
            <Td>{lecture.title}</Td>
            <Td>{lecture.period}</Td>
            <Td>{lecture.price}</Td>
            <Td>{lecture.date}</Td>
          </Tr>
        ))}
      </tbody>
    </Table>
  )
}

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`

const Th = styled.th`
  background-color: #f2f2f2;
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
`

const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`

const Td = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`
