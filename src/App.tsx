import React, { ReactElement, useEffect } from "react";

import { RecoilRoot } from "recoil";
import GlobalStyle from "./styles/globalStyles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeStore from "./Pages/HomeStore";

interface Props {}

function App({}: Props): ReactElement {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route element={<HomeStore />} path="/" />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
