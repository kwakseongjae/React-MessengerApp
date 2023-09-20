import React from "react";
import { useNavigate } from "react-router";
import * as S from "../../styles/ChattingList.styled";
import ChatSet from "../../states/datas/BasicChat";

function ChattingProfileBubble({ profile }) {
  //파라미터 쓰기
  const navigate = useNavigate();
  function handleProfileBubbleClick() {
    navigate("/chat-with/" + profile.profileImage);
    // history.push({
    //   pathname: "/chat-with/" + profile.profileImage,
    //   state: { userID: profile.profileImage },
    // });
  }
  return (
    <S.ProfileBubbleContainer onClick={handleProfileBubbleClick}>
      <S.ProfileImage
        src={process.env.PUBLIC_URL + "/" + profile.profileImage + ".jpg"}
      />
      <div>
        <S.ProfileName> {profile.name} </S.ProfileName>
        <S.LastMessage>
          {ChatSet[profile.profileImage - 1].messageContext}
        </S.LastMessage>
      </div>
    </S.ProfileBubbleContainer>
  );
}

function ChattingProfile({ userProfileSet }) {
  return (
    <div>
      {userProfileSet.map((profile, id) => (
        <ChattingProfileBubble profile={profile} key={id} />
      ))}
    </div>
  );
}

export default ChattingProfile;
