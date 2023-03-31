import React from "react";
import styled from "styled-components";

export interface PaginationProps {
  lecturesPerPage: number;
  totalLectures: number;
  paginate: (pageNumber: React.SetStateAction<number>) => void;
  currentPage: number;
}

export const Pagination = ({
  lecturesPerPage,
  totalLectures,
  paginate,
  currentPage,
}: PaginationProps) => {
  const pageNumbers = [];
  console.log(totalLectures, lecturesPerPage);
  for (let i = 1; i <= Math.ceil(totalLectures / lecturesPerPage); i++) {
    pageNumbers.push(i);
  }

  const handlePageClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    const selectedPage = Number(e.currentTarget.innerText);
    paginate(selectedPage);
  };

  return (
    <PaginationBox>
      {pageNumbers.map((number) => (
        <PageNumber
          key={number}
          onClick={handlePageClick}
          className={currentPage === number ? "active" : ""}
        >
          {number}
        </PageNumber>
      ))}
    </PaginationBox>
  );
};

const PaginationBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PageNumber = styled.div`
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  &.active {
    background-color: #4b49b6;
    color: white;
  }
  &:hover:not(.active) {
    background-color: #ddd;
  }
`;
