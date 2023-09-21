import React, { useEffect } from "react";
import * as S from "../../styles/Chatting.styled";

function MessageBubble({ chattingMessage }) {
  const chatList = chattingMessage.chatList;
  return (
    <>
      {chatList.map((chat) => (
        <S.ChattingBubble chattingUser={chat.userId}>
          <S.ChattingImage
            src={process.env.PUBLIC_URL + "/" + chat.userId + ".jpg"}
            alt=""
          />
          <S.ChattingContext>{chat.content}</S.ChattingContext>
        </S.ChattingBubble>
      ))}
    </>
  );
}

export default function MessageBox({ userChattingMessageSet }) {
  useEffect(() => {
    window.scrollBy(0, window.innerHeight);
  });

  return (
    <S.ChattingContainer>
      {userChattingMessageSet.map((chattingMessage, id) => (
        <MessageBubble chattingMessage={chattingMessage} key={id} />
      ))}
    </S.ChattingContainer>
  );
}
