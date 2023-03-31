/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateLecturesInput = {
  id?: string | null,
  title: string,
  content: string,
  period: number,
  currency_code: string,
  price: number,
};

export type ModelLecturesConditionInput = {
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  period?: ModelIntInput | null,
  currency_code?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  and?: Array< ModelLecturesConditionInput | null > | null,
  or?: Array< ModelLecturesConditionInput | null > | null,
  not?: ModelLecturesConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Lectures = {
  __typename: "Lectures",
  id: string,
  title: string,
  content: string,
  period: number,
  currency_code: string,
  price: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateLecturesInput = {
  id: string,
  title?: string | null,
  content?: string | null,
  period?: number | null,
  currency_code?: string | null,
  price?: number | null,
};

export type DeleteLecturesInput = {
  id: string,
};

export type ModelLecturesFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  period?: ModelIntInput | null,
  currency_code?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  and?: Array< ModelLecturesFilterInput | null > | null,
  or?: Array< ModelLecturesFilterInput | null > | null,
  not?: ModelLecturesFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelLecturesConnection = {
  __typename: "ModelLecturesConnection",
  items:  Array<Lectures | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionLecturesFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  content?: ModelSubscriptionStringInput | null,
  period?: ModelSubscriptionIntInput | null,
  currency_code?: ModelSubscriptionStringInput | null,
  price?: ModelSubscriptionFloatInput | null,
  and?: Array< ModelSubscriptionLecturesFilterInput | null > | null,
  or?: Array< ModelSubscriptionLecturesFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type CreateLecturesMutationVariables = {
  input: CreateLecturesInput,
  condition?: ModelLecturesConditionInput | null,
};

export type CreateLecturesMutation = {
  createLectures?:  {
    __typename: "Lectures",
    id: string,
    title: string,
    content: string,
    period: number,
    currency_code: string,
    price: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateLecturesMutationVariables = {
  input: UpdateLecturesInput,
  condition?: ModelLecturesConditionInput | null,
};

export type UpdateLecturesMutation = {
  updateLectures?:  {
    __typename: "Lectures",
    id: string,
    title: string,
    content: string,
    period: number,
    currency_code: string,
    price: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteLecturesMutationVariables = {
  input: DeleteLecturesInput,
  condition?: ModelLecturesConditionInput | null,
};

export type DeleteLecturesMutation = {
  deleteLectures?:  {
    __typename: "Lectures",
    id: string,
    title: string,
    content: string,
    period: number,
    currency_code: string,
    price: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetLecturesQueryVariables = {
  id: string,
};

export type GetLecturesQuery = {
  getLectures?:  {
    __typename: "Lectures",
    id: string,
    title: string,
    content: string,
    period: number,
    currency_code: string,
    price: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListLecturesQueryVariables = {
  id?: string | null,
  filter?: ModelLecturesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListLecturesQuery = {
  listLectures?:  {
    __typename: "ModelLecturesConnection",
    items:  Array< {
      __typename: "Lectures",
      id: string,
      title: string,
      content: string,
      period: number,
      currency_code: string,
      price: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateLecturesSubscriptionVariables = {
  filter?: ModelSubscriptionLecturesFilterInput | null,
};

export type OnCreateLecturesSubscription = {
  onCreateLectures?:  {
    __typename: "Lectures",
    id: string,
    title: string,
    content: string,
    period: number,
    currency_code: string,
    price: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateLecturesSubscriptionVariables = {
  filter?: ModelSubscriptionLecturesFilterInput | null,
};

export type OnUpdateLecturesSubscription = {
  onUpdateLectures?:  {
    __typename: "Lectures",
    id: string,
    title: string,
    content: string,
    period: number,
    currency_code: string,
    price: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteLecturesSubscriptionVariables = {
  filter?: ModelSubscriptionLecturesFilterInput | null,
};

export type OnDeleteLecturesSubscription = {
  onDeleteLectures?:  {
    __typename: "Lectures",
    id: string,
    title: string,
    content: string,
    period: number,
    currency_code: string,
    price: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};
