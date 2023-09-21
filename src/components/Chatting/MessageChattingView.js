import React, { useState } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import * as S from "../../styles/Chatting.styled";
import { useParams } from "react-router";
import {
  chattingStateByChattingId,
  chattingsState,
} from "../../states/atoms/chattings";
import dayjs from "dayjs";
import { v4 as uuid } from "uuid";
import TopBar from "./MessageTopBar";
import MessageBox from "./MessageBox";
import MessageInputBar from "./MessageInputBar";
// import ChatSet from "../../states/datas/BasicChat";

function ChattingView() {
  const { roomId } = useParams(1);
  const chattings = useRecoilValue(chattingsState);
  const room = useRecoilValue(chattingStateByChattingId(parseInt(roomId)));
  let { userID } = useParams();

  const [isMe, setIsMe] = useState(true);
  const currentUser = isMe ? 1 : userID;

  const [userChattingMessageSet, setUserChattingMessageSet] = useState([
    chattings[userID - 2],
  ]);

  // const userChattingMessage = [...userChattingMessageSet[0].chatList];
  // console.log(userChattingMessageSet);

  function switchUser() {
    setIsMe(!isMe);
  }

  function clickInputButton(messageUserInput) {
    const date = Date.now();
    const newChat = {
      userId: currentUser,
      content: messageUserInput,
      date: dayjs().format(),
      like: false,
      chatId: uuid(),
    };
    const tempObj = {
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
