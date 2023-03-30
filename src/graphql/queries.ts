/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getLectures = /* GraphQL */ `
  query GetLectures($id: ID!) {
    getLectures(id: $id) {
      id
      title
      content
      period
      currency_code
      price
      created_at
      updated_at
      createdAt
      updatedAt
    }
  }
`;
export const listLectures = /* GraphQL */ `
  query ListLectures(
    $id: ID
    $filter: ModelLecturesFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listLectures(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        title
        content
        period
        currency_code
        price
        created_at
        updated_at
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
