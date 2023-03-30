import React from 'react'
import { ReactNode, useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import styled from 'styled-components'
import Header from '../Header'

interface ILayoutProps {
  children: ReactNode
}

export default function Layout({ children }: ILayoutProps) {
  return (
    <Container>
      <Header />
      <Body>{children}</Body>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
`

const Body = styled.main`
  width: 100%;
`
