import AddModal from "@src/components/atoms/Modal/AddModal";
import DetailModal from "@src/components/atoms/Modal/DetailModal";
import Layout from "@src/components/organism/Layout";
import {
  clickedButton,
  openDetailModal,
  paginatedList,
  parseLectureData,
} from "@src/components/recoil/HomeStore";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import LectureInfo from "./components/LectureInfo";
import { Pagination } from "./components/Pagination";

export default function HomeStore() {
  const [openAddModal, setOpenAddModal] = useRecoilState(clickedButton);
  const [detailModal, setDetailModal] = useRecoilState(openDetailModal);
  const [currentPage, setCurrentPage] = useState(1);
  const [parseData, setparseData] = useRecoilState(parseLectureData);
  const [lecturesPerPage, setLecturesPerPage] = useState(5);

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

  return (
    <Layout>
      <Link to="/detail">+</Link>
      <ModalBox>{openAddModal ? <AddModal /> : null}</ModalBox>
      <ModalBox>{detailModal ? <DetailModal /> : null}</ModalBox>
      <LectureInfo currentLectures={currentLectures} />
      <Pagination
        lecturesPerPage={lecturesPerPage}
        totalLectures={parseData?.items ? parseData.items.length : 0}
        paginate={paginate}
        currentPage={currentPage}
      />
    </Layout>
  );
}

const ModalBox = styled.div`
  display: flex;
  justify-content: center;
`;
