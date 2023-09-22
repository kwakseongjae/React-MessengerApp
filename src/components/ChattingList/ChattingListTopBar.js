import React, { useState } from "react";
import * as S from "../../styles/ChattingList.styled";

function ChattingListTopBar({ searchChat, viewTitle }) {
  const [searchChatInput, setSearchChatInput] = useState("");

  function handleChange1(e) {
    setSearchChatInput(e.target.value);
    searchChat(searchChatInput);
  }

  // useEffect를 사용하고 싶은데 알 수 없는 오류가 발생해서 우선 주석 처리 후 다른 로직 사용
  // 향후 사용 방법 찾기
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
