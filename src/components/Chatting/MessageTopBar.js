import React from "react";
import * as S from "../../styles/Chatting.styled";
import { useRecoilValue } from "recoil";
import { friendsState, userState } from "../../states/atoms/user";

export default function TopBar({ switchUser, currentUser }) {
  const friendProfile = useRecoilValue(friendsState);
  const myProfile = useRecoilValue(userState);
  const userProfile = [];
  userProfile.push(myProfile);
  friendProfile.map((friend) => userProfile.push(friend));

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
      <S.ProfileName>{userProfile[currentUser - 1].userName}</S.ProfileName>
    </S.TopBox>
  );
}
