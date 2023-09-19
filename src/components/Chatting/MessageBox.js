import React, { useEffect } from "react";
import * as S from "../../styles/Chatting.styled";

function MessageBubble({ chattingMessage }) {
  return (
    <S.ChattingBubble chattingUser={chattingMessage.chattingUser}>
      <S.ChattingImage
        src={
          process.env.PUBLIC_URL + "/" + chattingMessage.chattingUser + ".jpg"
        }
        alt=""
      />
      <S.ChattingContext>{chattingMessage.messageContext}</S.ChattingContext>
    </S.ChattingBubble>
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
