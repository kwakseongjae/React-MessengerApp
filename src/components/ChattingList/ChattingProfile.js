import React from "react";
import { useNavigate } from "react-router";
import * as S from "../../styles/ChattingList.styled";

function ChattingProfileBubble({ chat }) {
  const navigate = useNavigate();
  function handleProfileBubbleClick() {
    navigate("/chat-with/" + chat.userId);
  }
  return (
    <S.ProfileBubbleContainer onClick={handleProfileBubbleClick}>
      <S.ProfileImage
        src={process.env.PUBLIC_URL + "/" + chat.userId + ".jpg"}
      />
      <div>
        <S.ProfileName> {chat.userName} </S.ProfileName>
        <S.LastMessage>
          {chat.chatList[chat.chatList.length - 1].content}
        </S.LastMessage>
      </div>
    </S.ProfileBubbleContainer>
  );
}

function ChattingProfile({ matchChatSet }) {
  return (
    <div>
      {matchChatSet.map((chat, id) => (
        <ChattingProfileBubble chat={chat} key={id} />
      ))}
    </div>
  );
}

export default ChattingProfile;
