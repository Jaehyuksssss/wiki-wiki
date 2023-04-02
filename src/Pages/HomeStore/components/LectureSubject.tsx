import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import {
  clickedButton,
  lectureList,
  parseLectureData,
} from "@src/components/recoil/HomeStore";
import {
  GraphQLQuery,
  GraphQLResult,
  GraphQLSubscription,
} from "@aws-amplify/api";
import { API, graphqlOperation } from "aws-amplify";
import { ListLecturesQuery, OnCreateLecturesSubscription } from "@src/API";
import { onCreateLectures } from "@src/graphql/subscriptions";
import { listLectures } from "@src/graphql/queries";
import { LectureDetail } from "@src/components/interfaces";
import { Pagination } from "./Pagination";

export default function LectureTitle() {
  const [openModal, setOpenModal] = useRecoilState(clickedButton);
  const [parseData, setparseData] = useRecoilState(parseLectureData);
  const [currentPage, setCurrentPage] = useState(1);
  const [lecturesPerPage, setLecturesPerPage] = useState(5);
  console.log(parseData);
  const HandleModal = () => {
    setOpenModal(!openModal);
  };

  const fetchAllLectures = async () => {
    try {
      const response = (await API.graphql(
        graphqlOperation(listLectures)
      )) as GraphQLResult<{ listLectures: LectureDetail }>;

      const listLecture = response.data?.listLectures;
      setparseData(listLecture ? listLecture : {});
    } catch (error) {
      console.error(error);
    }
  };

  const fetchLectures = async () => {
    const request = (await API.graphql(
      graphqlOperation(listLectures)
    )) as GraphQLResult<{ listLectures: LectureDetail }>;
    const listLecture = request.data?.listLectures;
    setparseData(listLecture ? listLecture : {});
  };

  useEffect(() => {
    fetchAllLectures();
    fetchLectures();
  }, []);

  // Get current lectures
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
          {currentLectures?.map((lecture) => (
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
      <Pagination
        lecturesPerPage={lecturesPerPage}
        totalLectures={parseData?.items ? parseData.items.length : 0}
        paginate={paginate}
        currentPage={currentPage}
      />
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
