import React from "react";
import { Link } from "react-router-dom";
import * as S from "../styles/MenuBar.styled";

const MenuBar = () => {
  return (
    <S.MenuContainer>
      <Link to="/profile">
        <S.MenuButton>
          <S.ButtonImage src={process.env.PUBLIC_URL + "/profile.png"} />
        </S.MenuButton>
      </Link>
      <Link to="/chatting-list">
        <S.MenuButton>
          <S.ButtonImage src={process.env.PUBLIC_URL + "/chatting.png"} />
        </S.MenuButton>
      </Link>
      <Link to="/more">
        <S.MenuButton>
          <S.ButtonImage src={process.env.PUBLIC_URL + "/more.png"} />
        </S.MenuButton>
      </Link>
    </S.MenuContainer>
  );
};

export default MenuBar;
