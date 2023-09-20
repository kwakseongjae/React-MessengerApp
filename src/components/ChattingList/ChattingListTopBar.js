import React, { useEffect, useState } from "react";
import * as S from "../../styles/ChattingList.styled";

function ChattingListTopBar({ searchChat, viewTitle }) {
  // const [searchUserInput, setSearchUserInput] = useState("");
  const [searchChatInput, setSearchChatInput] = useState("");

  // function handleChange(e) {
  //   setSearchUserInput(e.target.value);
  // }
  function handleChange1(e) {
    setSearchChatInput(e.target.value);
    searchChat(searchChatInput);
  }

  // useEffect(() => {
  //   searchChat(searchChatInput);
  // }, [searchChatInput]);

  return (
    <S.ChattingListContainer>
      <h1>{viewTitle}</h1>
      <form id="SearchChatting" autoComplete="off">
        <S.SearchChatting
          name="search"
          placeholder="🔎 검색"
          onChange={handleChange1}
        />
      </form>
    </S.ChattingListContainer>
  );
}

export default ChattingListTopBar;
