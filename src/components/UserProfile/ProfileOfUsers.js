import React from "react";
import * as S from "../../styles/UserProfile.styled";

function ProfileBubble({ profile, handleModal }) {
  function profileClicked() {
    handleModal(profile);
  }
  //파라미터 쓰기
  return (
    <S.ProfileBubbleContainer onClick={profileClicked}>
      <S.ProfileImg
        src={process.env.PUBLIC_URL + "/" + profile.profileImage + ".jpg"}
      />
      <div>
        <S.UserName> {profile.userName} </S.UserName>
        <S.ProfileMessage>{profile.statusMessage}</S.ProfileMessage>
      </div>
    </S.ProfileBubbleContainer>
  );
}

function ProfileOfUsers({ userProfileSet, handleModal }) {
  return (
    <div>
      {userProfileSet.map((profile, id) => (
        <ProfileBubble profile={profile} key={id} handleModal={handleModal} />
      ))}
    </div>
  );
}

export default ProfileOfUsers;
