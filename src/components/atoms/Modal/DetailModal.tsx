import {
  parseLectureData,
  lectureSelected,
  openDetailModal,
  clickedButton,
} from "@src/components/recoil/HomeStore";
import LectureInfo from "@src/Pages/HomeStore/components/LectureInfo";
import { Pagination } from "@src/Pages/HomeStore/components/Pagination";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";

export default function DetailModal() {
  const [openAddModal, setOpenAddModal] = useRecoilState(clickedButton);
  const [currentPage, setCurrentPage] = useState(1);
  const [lecturesPerPage, setLecturesPerPage] = useState(5);
  const [parseData, setparseData] = useRecoilState(parseLectureData);
  const [selectedLecture, setSelectedLecture] = useRecoilState(lectureSelected);
  const [detailModal, setDetailModal] = useRecoilState(openDetailModal);

  //pagination
  const indexOfLastLecture = currentPage * lecturesPerPage;
  const indexOfFirstLecture = indexOfLastLecture - lecturesPerPage;
  const currentLectures = parseData?.items?.slice(
    indexOfFirstLecture,
    indexOfLastLecture
  );

  // Change page
  const paginate = (pageNumber: React.SetStateAction<number>) =>
    setCurrentPage(pageNumber);

  // 선택된 강의 데이터
  const lecture = parseData.items?.find(
    (v) => parseInt(v.id) === selectedLecture
  );
  console.log(lecture);
  console.log(parseData.items);
  //   console.log(lectureIndex);
  const handleCloseModal = () => {
    setDetailModal(false);
  };
  return (
    <ModalContainer>
      {lecture && (
        <>
          <CloseButton onClick={handleCloseModal}>
            <CloseIcon />
          </CloseButton>
          <Date>{lecture.date}</Date>
          <Title>강의 제목</Title>
          <Text>{lecture.title}</Text>
          <Title>강의 내용</Title>
          <Text>{lecture.content}</Text>
          <Title>강의 가격</Title>
          <Text>{lecture.price}</Text>
          <Title>강의 기간</Title>
          <Text>{`${lecture.createdAt} ~ ${lecture.updatedAt}`}</Text>
        </>
      )}
      <LectureInfo currentLectures={currentLectures} />
      <Pagination
        lecturesPerPage={lecturesPerPage}
        totalLectures={parseData?.items ? parseData.items.length : 0}
        paginate={paginate}
        currentPage={currentPage}
      />
    </ModalContainer>
  );
}

const ModalContainer = styled.div`
  background: white;
  width: 800px;
  height: 700px;
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

const Title = styled.div`
  margin-top: 20px;
  font-size: 20px;
  font-weight: bold;
`;

const Text = styled.div`
  margin-top: 10px;
  font-size: 16px;
`;

const Date = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;
const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  outline: none;
`;
const CloseIcon = styled.span`
  display: block;
  width: 25px;
  height: 25px;
  position: relative;

  &::before,
  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 30px;
    height: 2px;
    background-color: black;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
`;
