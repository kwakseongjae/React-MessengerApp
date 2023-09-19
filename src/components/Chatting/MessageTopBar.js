import React from "react";
import * as S from "../../styles/Chatting.styled";
import userProfileSet from "../../states/data/User";

export default function TopBar({ switchUser, currentUser }) {
  function handleProfileImageButtonClick() {
    switchUser();
  }

  return (
    <S.TopBox>
      <S.ProfileImageButton onClick={handleProfileImageButtonClick}>
        <S.ProfileImage
          src={` ${process.env.PUBLIC_URL}/${currentUser}.jpg`}
          alt=""
        />
      </S.ProfileImageButton>
      <S.ProfileName>{userProfileSet[currentUser - 1].name}</S.ProfileName>
    </S.TopBox>
  );
}
