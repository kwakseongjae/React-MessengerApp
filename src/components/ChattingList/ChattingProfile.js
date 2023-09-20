import React from "react";
import { useNavigate } from "react-router";
import * as S from "../../styles/ChattingList.styled";
// import ChatSet from "../../states/datas/BasicChat";
// import { useRecoilValue } from "recoil";
// import { friendsState } from "../../states/atoms/user";

function ChattingProfileBubble({ chat }) {
  //파라미터 쓰기
  const navigate = useNavigate();
  function handleProfileBubbleClick() {
    navigate("/chat-with/" + chat.userId);
    // history.push({
    //   pathname: "/chat-with/" + profile.profileImage,
    //   state: { userID: profile.profileImage },
    // });
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
