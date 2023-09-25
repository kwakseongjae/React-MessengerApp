import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import * as S from "../styles/Chatting.styled";
import { useParams } from "react-router";
import { chattingsState } from "../states/atoms/chattings";
import dayjs from "dayjs";
import { v4 as uuid } from "uuid";
import TopBar from "../components/Chatting/MessageTopBar";
import MessageBox from "../components/Chatting/MessageBox";
import MessageInputBar from "../components/Chatting/MessageInputBar";

function Chatting() {
  const [chattings, setChattings] = useRecoilState(chattingsState);
  const { userID } = useParams();
  const [isMe, setIsMe] = useState(true);
  const currentUser = isMe ? 1 : userID;
  const [userChattingMessageSet, setUserChattingMessageSet] = useState([
    chattings[userID - 2],
  ]);

  useEffect(() => {
    const tempChattings = [...chattings];
    tempChattings.splice(userID - 2, 1, ...userChattingMessageSet);
    setChattings(tempChattings);
  }, [userChattingMessageSet]);

  function switchUser() {
    setIsMe(!isMe);
  }

  function clickInputButton(messageUserInput) {
    const newChat = {
      userId: parseInt(currentUser),
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

export default Chatting;
