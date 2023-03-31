/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createLectures = /* GraphQL */ `
  mutation CreateLectures(
    $input: CreateLecturesInput!
    $condition: ModelLecturesConditionInput
  ) {
    createLectures(input: $input, condition: $condition) {
      id
      title
      content
      period
      currency_code
      price
      createdAt
      updatedAt
    }
  }
`;
export const updateLectures = /* GraphQL */ `
  mutation UpdateLectures(
    $input: UpdateLecturesInput!
    $condition: ModelLecturesConditionInput
  ) {
    updateLectures(input: $input, condition: $condition) {
      id
      title
      content
      period
      currency_code
      price
      createdAt
      updatedAt
    }
  }
`;
export const deleteLectures = /* GraphQL */ `
  mutation DeleteLectures(
    $input: DeleteLecturesInput!
    $condition: ModelLecturesConditionInput
  ) {
    deleteLectures(input: $input, condition: $condition) {
      id
      title
      content
      period
      currency_code
      price
      createdAt
      updatedAt
    }
  }
`;
