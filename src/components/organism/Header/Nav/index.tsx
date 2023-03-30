import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Logo from '../../../atoms/Logo'

import { useRecoilState } from 'recoil'
import { HandleScroll, Visible } from '../../../recoil/HandleScroll'
import React from 'react'

export default function Nav() {
  return (
    <>
      <Container>
        <Link to="/">
          <Logo />
        </Link>
      </Container>
    </>
  )
}
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 65px;
  padding: 0;
  text-align: center;
  z-index: 100;
`
