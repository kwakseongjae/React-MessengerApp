import React from "react";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Router from "./components/Router";
// import MessageChattingView from "./components/Chatting/MessageChattingView";
// import ChattingList from "./components/ChattingList/ChattingListView";
// import MoreView from "./components/MoreView";
// import ProfileListView from "./components/UserProfile/ProfileListView";
import MenuBar from "./components/MenuBar";
import StatusBar from "./components/StatusBar";
import * as S from "./styles/App.styled";
import { GlobalStyle } from "./styles/Globalstyle";


function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <RecoilRoot>
        <S.AppContainer>
          <StatusBar />
          <S.Container>
            <MenuBar />
            <Router />
          </S.Container>
        </S.AppContainer>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
