import React from "react";
import * as S from "../styles/MoreView.styled";
import { useRecoilValue } from "recoil";
import { userState } from "../states/atoms/user";

function MoreView() {
  const myProfile = useRecoilValue(userState);

  return (
    <S.Container>
      <h1>더보기</h1>
      <S.ProfileContainer>
        <S.ProfileName>
          <h2>{myProfile.userName}</h2>
          <S.ProfileImageNew
            src={process.env.PUBLIC_URL + myProfile.userId + ".jpg"}
            alt=""
          ></S.ProfileImageNew>
        </S.ProfileName>
        <div></div>
      </S.ProfileContainer>
    </S.Container>
  );
}

export default MoreView;
