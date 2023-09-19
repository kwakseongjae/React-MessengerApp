import React from "react";
import * as S from "../styles/MoreView.styled";
import userProfileSet from "../states/data/User";

function MoreView() {
  return (
    <S.Container>
      <h1>더보기</h1>
      <S.ProfileContainer>
        <S.ProfileName>
          <h2>{userProfileSet[0].name}</h2>
          <S.ProfileImageNew
            src={process.env.PUBLIC_URL + "/1.jpg"}
            alt=""
          ></S.ProfileImageNew>
        </S.ProfileName>
        <div></div>
      </S.ProfileContainer>
    </S.Container>
  );
}

export default MoreView;
