import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { chattingsState } from "../../states/atoms/chattings";
import ChattingProfile from "./ChattingProfile";
import ChattingListTopBar from "./ChattingListTopBar";

function ChattingList() {
  const chattings = useRecoilValue(chattingsState);
  const chattingList = [chattings];
  const [matchChatSet, setMatchChatSet] = useState(chattingList[0]);

  function searchChat(searchChatInput) {
    setMatchChatSet([]);
    chattings.map((chat) => {
      if (chat.userName === searchChatInput) {
        setMatchChatSet((matchChat) => [...matchChat, chat]);
      }
    });
  }

  return (
    <div>
      <ChattingListTopBar searchChat={searchChat} viewTitle={"채팅"} />
      <ChattingProfile matchChatSet={matchChatSet} />
    </div>
  );
}

export default ChattingList;
