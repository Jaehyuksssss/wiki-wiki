import React from 'react'
import styled from 'styled-components'
import Nav from './Nav'
import SearchBox from './SearchBox'

export default function Header() {
  return (
    <HeaderWrapper>
      <Nav />
      <SearchBox />
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
