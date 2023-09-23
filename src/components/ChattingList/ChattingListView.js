import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { chattingsState } from "../../states/atoms/chattings";
import ChattingProfile from "./ChattingProfile";
import ChattingListTopBar from "./ChattingListTopBar";

function ChattingList() {
  const chattings = useRecoilValue(chattingsState);
  const chattingList = [chattings];
  const [matchChatSet, setMatchChatSet] = useState(chattingList[0]);

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
