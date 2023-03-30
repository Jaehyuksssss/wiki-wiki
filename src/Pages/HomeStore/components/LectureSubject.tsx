import { LectureDetail } from "@src/components/constant";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { useRecoilState } from "recoil";
import { clickedButton } from "@src/components/recoil/HomeStore";

export default function LectureTitle() {
  const [openModal, setOpenModal] = useRecoilState(clickedButton);

  const HandleModal = () => {
    setOpenModal(!openModal);
    console.log(openModal);
  };
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
    </div>
  );
}

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const Th = styled.th`
  background-color: #f2f2f2;
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
  cursor: pointer;
`;

const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
  cursor: pointer;
`;

const Td = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
  cursor: pointer;
`;
const Span = styled.span`
  font-size: 20px;
`;
const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
`;
