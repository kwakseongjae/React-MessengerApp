import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { chattingsState } from "../states/atoms/chattings";
import ChattingProfile from "../components/ChattingList/ChattingProfile";
import ChattingListTopBar from "../components/ChattingList/ChattingListTopBar";

function ChattingList() {
  const chattings = useRecoilValue(chattingsState);
  const [matchChatSet, setMatchChatSet] = useState(chattings);

  function searchItem(searchChatInput) {
    setMatchChatSet([]);
    for (let chat of chattings) {
      if (chat.userName.includes(searchChatInput)) {
        setMatchChatSet((matchChat) => [...matchChat, chat]);
      }
    }
  }

  return (
    <div>
      <ChattingListTopBar searchItem={searchItem} viewTitle={"채팅"} />
      <ChattingProfile matchChatSet={matchChatSet} />
    </div>
  );
}

export default ChattingList;
