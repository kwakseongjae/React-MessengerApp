import React, { useEffect, useState } from "react";
import * as S from "../../styles/ChattingList.styled";

function ChattingListTopBar({ searchUser, viewTitle }) {
  const [searchUserInput, setSearchUserInput] = useState("");

  function handleChange(e) {
    setSearchUserInput(e.target.value);
  }

  useEffect(() => {
    searchUser(searchUserInput);
  }, [searchUserInput]);

  return (
    <S.ChattingListContainer>
      <h1>{viewTitle}</h1>
      <form id="SearchChatting" autoComplete="off">
        <S.SearchChatting
          name="search"
          placeholder="🔎 검색"
          onChange={handleChange}
        />
      </form>
    </S.ChattingListContainer>
  );
}

export default ChattingListTopBar;
