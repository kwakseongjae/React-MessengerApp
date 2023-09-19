import React, { useState } from "react";
import TopBar from "./MessageTopBar";
import MessageBox from "./MessageBox";
import MessageInputBar from "./MessageInputBar";
import * as S from "../../styles/Chatting.styled";
import { useParams } from "react-router";
import ChatSet from "../../states/data/BasicChat";


function ChattingView() {
  let { userID } = useParams();
  const [isMe, setIsMe] = useState(true);
  const currentUser = isMe ? 1 : userID;
  const [userChattingMessageSet, setUserChattingMessageSet] = useState([
    ChatSet[userID - 1],
  ]);

  function switchUser() {
    setIsMe(!isMe);
  }
  function clickInputButton(messageUserInput) {
    const ID = Date.now();
    setUserChattingMessageSet((formerMessage) => [
      ...formerMessage,
      { chattingUser: currentUser, messageContext: messageUserInput, id: ID },
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
