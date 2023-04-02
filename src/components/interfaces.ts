export interface LectureItem {
    id: string;
    title: string;
    period: string;
    price: number;
    date: string;

}
export interface LectureDetail {
    items: LectureItem[];
  }

export interface createLectureItem {
    id: string;
    title: string;
    content: string,
    period: number;
    price: number;
    currency_code: string,
}

export interface createLectureItemParams {
    items: createLectureItem[];
}
