import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import * as S from "../../styles/Chatting.styled";
import { useParams } from "react-router";
import { chattingsState } from "../../states/atoms/chattings";
import dayjs from "dayjs";
import { v4 as uuid } from "uuid";
import TopBar from "./MessageTopBar";
import MessageBox from "./MessageBox";
import MessageInputBar from "./MessageInputBar";

function ChattingView() {
  // const [chattings, setChattings] = useRecoilState(chattingsState);
  const chattings = useRecoilValue(chattingsState);
  let { userID } = useParams();
  const [isMe, setIsMe] = useState(true);
  const currentUser = isMe ? 1 : userID;
  const [userChattingMessageSet, setUserChattingMessageSet] = useState([
    chattings[userID - 2],
  ]);

  function switchUser() {
    setIsMe(!isMe);
  }

  function clickInputButton(messageUserInput) {
    const newChat = {
      userId: currentUser,
      content: messageUserInput,
      date: dayjs().format(),
      like: false,
      chatId: uuid(),
    };
    const tempObj = {
      // chatList에 push하려 하면 에러가 발생해서 임시 변수 사용
      ...userChattingMessageSet[0],
      chatList: [...userChattingMessageSet[0].chatList, newChat],
    };

    setUserChattingMessageSet([tempObj]);
  }

  return (
    <S.Container>
      <TopBar switchUser={switchUser} currentUser={currentUser} />
      <MessageBox userChattingMessageSet={userChattingMessageSet} />
      <MessageInputBar clickInputButton={clickInputButton} />
    </S.Container>
  );
}

export default ChattingView;
