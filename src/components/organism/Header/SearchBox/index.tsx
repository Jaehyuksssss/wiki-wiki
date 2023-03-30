import React from 'react'
import styled from 'styled-components'

export default function SearchBox() {
  return (
    <Container>
      <SearchBoxWrapper>
        <Span>Search Information</Span>
        <InputWrapper>
          <Input />
          <SearchIconWrapper>
            <SearchIcon src="public/Images/search.png" alt="" />
          </SearchIconWrapper>
        </InputWrapper>
      </SearchBoxWrapper>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
`
const SearchBoxWrapper = styled.div`
  width: 100%;
  height: 250px;
  background-color: #4b49b6;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`
const Span = styled.span`
  margin-top: 30px;
  color: white;
  font-family: 'Inter', sans-serif;
  font-size: 25px;
`

const InputWrapper = styled.div`
  position: relative;
`

const Input = styled.input`
  background-color: white;
  width: 350px;
  height: 35px;
  border-radius: 50px;
  padding-left: 30px;
`

const SearchIconWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
`

const SearchIcon = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`
