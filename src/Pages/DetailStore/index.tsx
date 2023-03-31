import AddModal from '@src/components/atoms/Modal/AddModal'
import Layout from '@src/components/organism/Layout'
import { clickedButton } from '@src/components/recoil/HomeStore'
import React from 'react'
import { useRecoilState } from 'recoil'
import styled from 'styled-components'
import LectureDetail from './components/LectureDetail'

export default function DetailStore() {
  return (
    <Layout>
      <LectureDetail title={'강의제목'} content={'강의 내용'} />
    </Layout>
  )
}
