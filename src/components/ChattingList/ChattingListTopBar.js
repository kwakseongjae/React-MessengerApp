import React, { useState, useEffect } from "react";
import * as S from "../../styles/ChattingList.styled";

function ChattingListTopBar({ searchItem, viewTitle }) {
  const [searchInput, setSearchChatInput] = useState("");

  useEffect(() => {
    searchItem(searchInput);
  }, [searchInput]);

  function handleChange(e) {
    setSearchChatInput(e.target.value);
  }

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
