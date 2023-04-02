import React, { useEffect, useState } from "react";
import AddModal from "@src/components/atoms/Modal/AddModal";
import { useRecoilState } from "recoil";
import styled from "styled-components";

import {
  clickedButton,
  lectureList,
  lectureSelected,
  openDetailModal,
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
import {
  createLectureItem,
  LectureDetail,
  LectureItem,
} from "@src/components/interfaces";

type Lecture = {
  id: string;
  title: string;
  period: string;
  price: number;
  date: string;
};

type LectureInfoProps = {
  currentLectures: Lecture[] | undefined;
};

export default function LectureInfo({ currentLectures }: LectureInfoProps) {
  const itemsPerPage = 5;
  // const pageCount = Math.ceil(items.length / itemsPerPage)
  const [openModal, setOpenModal] = useRecoilState(clickedButton);
  const [parseData, setparseData] = useRecoilState(parseLectureData);
  const [detailModal, setDetailModal] = useRecoilState(openDetailModal);
  const [selectedLecture, setSelectedLecture] = useRecoilState(lectureSelected);

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

  // Handle modal
  const HandleModal = () => {
    setOpenModal(!openModal);
  };
  const HandleDetailModal = (lecture: any) => {
    setDetailModal(!detailModal);
    setSelectedLecture(parseInt(lecture.id, 10));
  };
  console.log(selectedLecture);
  return (
    <Container>
      <ContentsWrapper>
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
                  <Td>
                    <button onClick={() => HandleDetailModal(lecture)}>
                      {lecture.id}
                    </button>
                  </Td>
                  <Td>{lecture.title}</Td>
                  <Td>{lecture.period}</Td>
                  <Td>{lecture.price}</Td>
                  <Td>{lecture.date}</Td>
                </Tr>
              ))}
            </tbody>
          </Table>
        </div>
      </ContentsWrapper>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 50px;
`;

const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f0eeee;
  margin: 0px 50px 50px 50px;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;

  @media (max-width: 600px) {
    width: 90%;
  }
`;

const Th = styled.th`
  background-color: #f2f2f2;
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
  cursor: pointer;

  @media (max-width: 600px) {
    padding: 6px;
  }
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

  @media (max-width: 600px) {
    padding: 6px;
  }
`;
const Span = styled.span`
  font-size: 20px;
`;
const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
`;
