import { LectureDetail } from '@src/components/constant'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useRecoilState } from 'recoil'
import {
  clickedButton,
  lectureList,
  parseLectureData,
} from '@src/components/recoil/HomeStore'
import {
  GraphQLQuery,
  GraphQLResult,
  GraphQLSubscription,
} from '@aws-amplify/api'
import { API, graphqlOperation } from 'aws-amplify'
import { ListLecturesQuery, OnCreateLecturesSubscription } from '@src/API'
import { onCreateLectures } from '@src/graphql/subscriptions'
import { listLectures } from '@src/graphql/queries'

interface LectureDetail {
  id: string
  title: string
  period: string
  price: number
  date: string
  items: []
}
export default function LectureTitle() {
  const [openModal, setOpenModal] = useRecoilState(clickedButton)
  const [parseData, setparseData] = useRecoilState<LectureDetail[]>(
    parseLectureData,
  )
  console.log(parseData)
  const [lectureListData, setLectureListData] = useRecoilState(lectureList)
  const HandleModal = () => {
    setOpenModal(!openModal)
    console.log(openModal)
    console.log(parseData)
  }
  const fetchAllLectures = async () => {
    try {
      const response: GraphQLResult<any> = await API.graphql(
        graphqlOperation(listLectures),
      )
      setparseData(response.data.listLectures)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    fetchAllLectures()
  }, [])
  console.log(parseData)
  // const sub = API.graphql<GraphQLSubscription<OnCreateLecturesSubscription>>(
  //   graphqlOperation(onCreateLectures),
  // ).subscribe({
  //   next: (payload) => {
  //     const onCreateLectures = payload.value.data?.onCreateLectures
  //     console.log(onCreateLectures)
  //     setLectures(
  //       (prevLectures) => [...prevLectures, onCreateLectures] as never[],
  //     )
  //   },
  // })

  // sub.unsubscribe()

  // useEffect(() => {
  //   const subscription = API.graphql<
  //     GraphQLSubscription<OnCreateLecturesSubscription>
  //   >(graphqlOperation(onCreateLectures)).subscribe({
  //     next: (payload) => {
  //       const onCreateLectures = payload.value.data?.onCreateLectures
  //       console.log(onCreateLectures)
  //     },
  //   })
  //   return () => subscription.unsubscribe()
  // }, [sub])

  const fetchLectures = async () => {
    const request: GraphQLResult<any> = await API.graphql(
      graphqlOperation(listLectures),
    )
    setparseData(request.data.listTweets)
  }
  useEffect(() => {
    fetchLectures()
  }, [])
  return (
    <div>
      <Table>
        <thead>
          <Tr>
            <Th>ID</Th>
            <Th>Title</Th>
            <Th>Period</Th>
            <Th>Price</Th>
            <Th>Date</Th>
            <Th>
              <ButtonBox onClick={HandleModal}>
                <button>
                  <Span>+</Span>
                </button>
              </ButtonBox>
            </Th>
          </Tr>
        </thead>
        <tbody>
          {parseData?.items?.map((lecture: any) => (
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
    </div>
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
  cursor: pointer;
`

const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
  cursor: pointer;
`

const Td = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
  cursor: pointer;
`
const Span = styled.span`
  font-size: 20px;
`
const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
`
