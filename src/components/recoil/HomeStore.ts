import { atom } from 'recoil'

export const clickedButton = atom({
  key: 'ClickTitle',
  default: false,
})

export const lectureList = atom<any[]>({
  key: 'lectureList',
  default: [],
})
