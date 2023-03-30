import { atom } from 'recoil'

export const HandleScroll = atom({
  key: 'scrollHandle',
  default: window.pageXOffset,
})
export const Visible = atom({
  key: 'visible',
  default: true,
})
