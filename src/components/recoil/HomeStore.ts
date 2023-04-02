import { atom } from 'recoil'
import { createLectureItem, LectureDetail } from '../interfaces'

export const clickedButton = atom({
  key: 'ClickTitle',
  default: false,
})
export const openDetailModal = atom({
  key: 'DetailModal',
  default: false,
})
export const lectureList = atom< Partial<createLectureItem>[]>({
  key: 'lectureList',
  default: [],
})
export const lectureSelected= atom({
  key: 'lectureListNumber',
  default: 0,
})

export const parseLectureData = atom<Partial<LectureDetail>>({
  key: 'lectureData',
  default: {},
})

export const paginatedList = atom< Partial<createLectureItem>[]>({
  key: 'paginatedList',
  default: [],
})

