# 위키 서비스

- 개발 인원 : 1인 (임재혁)

```
npm run dev
```

## 진행사항

1. Figma를 통한 간단한 기획 및 디자인
2. 프론트엔드 개발
3. aws-amplfy를 통한 서버 연동

  <img width="642" alt="image" src="https://github.com/Jaehyuksssss/wiki-wiki/blob/master/public/Images/Figma.png?raw=true">

## 메인 페이지 / ADD 모달

  <img width="642" alt="image" src="https://github.com/Jaehyuksssss/wiki-wiki/blob/master/public/Images/ADDMODAL.png?raw=true">

- 메인 페이지에는 여러개의 위키페이지 제목이 목록으로 나옵니다.
- 목록으로 보여지는 제목의 갯수는 5개이며, 5개가 넘어가면 페이지를 구분해서 표시합니다.
- 메인 페이지에서 위키페이지 제목을 클릭하면 제목과 본문을 볼 수 있습니다.
- 메인 페이지에서 추가 버튼을 누르면 새로이 입력할 수 있는 창이 나오고, 제목과 내용을 입력할 수 있습니다.

## 위키 디테일 모달

  <img width="642" alt="image" src="https://github.com/Jaehyuksssss/wiki-wiki/blob/master/public/Images/DetailModal.png?raw=true">

- 위키페이지는 제목과 본문으로 구성되며 각각 텍스트입니다.
- 위키페이지 제목을 클릭하면 제목과 본문을 볼 수 있습니다.
- 위키내용페이지에는 수정 버튼이 있고, 수정을 누르면 내용을 수정해서 저장할 수 있습니다.
- 위키페이지 아래에는 위키페이지 제목을 포함하는 내용이 담긴 위키페이지의 제목을 나열합니다.

## 데이터

- aws-amplify , graphql

## 기술 스택

- React.js , typeScript , styled-components , webpack , babel , recoil

## 디자인

- 각 페이지마다 적절한 배경색과 폰트를 사용하여 가독성을 높입니다.
- 모바일 화면에 대한 최적화를 고려하여 디자인합니다.

## 구현 예정

1. 수정기능
2. 검색 및 필터 기능
3. 다크모드
