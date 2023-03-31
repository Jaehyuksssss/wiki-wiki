import { atom } from 'recoil'
import { createLectureItem, LectureDetail } from '../interfaces'

export const clickedButton = atom({
  key: 'ClickTitle',
  default: false,
})

export const lectureList = atom< Partial<createLectureItem>[]>({
  key: 'lectureList',
  default: [],
})

export const parseLectureData = atom<Partial<LectureDetail>>({
  key: 'lectureData',
  default: {},
})
