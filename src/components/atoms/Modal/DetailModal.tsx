import React from "react";
import styled from "styled-components";

export default function DetailModal() {
  return <ModalContainer>디테일 모달</ModalContainer>;
}
const ModalContainer = styled.div`
  background: white;
  width: 700px;
  height: 500px;
  position: absolute;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
