import AddModal from '@src/components/atoms/Modal/AddModal'
import Layout from '@src/components/organism/Layout'
import { clickedButton } from '@src/components/recoil/HomeStore'
import React from 'react'
import { useRecoilState } from 'recoil'
import styled from 'styled-components'
import LectureInfo from './components/LectureInfo'

export default function HomeStore() {
  const [openModal, setOpenModal] = useRecoilState(clickedButton)
  return (
    <Layout>
      <ModalBox>{openModal ? <AddModal /> : null}</ModalBox>
      <LectureInfo />
    </Layout>
  )
}

const ModalBox = styled.div`
  display: flex;
  justify-content: center;
`