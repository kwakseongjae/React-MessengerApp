import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import * as S from "../../styles/Chatting.styled";
import { useParams } from "react-router";
import {
  chattingStateByChattingId,
  chattingsState,
} from "../../states/atoms/chattings";
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

  function switchUser() {
    setIsMe(!isMe);
  }

  function clickInputButton(messageUserInput) {
    const date = Date.now();
    setUserChattingMessageSet((formerMessage) => [
      ...formerMessage,
      {
        userId: currentUser,
        content: messageUserInput,
        date: date,
        like: false,
        chatId: "example1",
      },
    ]);
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
