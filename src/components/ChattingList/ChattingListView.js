import React, { useState } from "react";
// import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from "recoil";
import { chattingsState } from "../../states/atoms/chattings";
import ChattingProfile from "./ChattingProfile";
import ChattingListTopBar from "./ChattingListTopBar";
// import userProfileSet from "../../states/datas/User";

function ChattingList() {
  const chattings = useRecoilValue(chattingsState);
  const chattingList = [chattings];
  
  const [matchUserSet, setMatchUserSet] = useState(chattingList[0]);
  const [matchChatSet, setMatchChatSet] = useState(chattingList[0]);

  // const searchUser1 = (searchUserInput) => {
  //   const matchedProfiles = userProfileSet.filter((userProfile) =>
  //     userProfile.name.includes(searchUserInput)
  //   );
  //   setMatchUserSet(matchedProfiles);
  // };

  // function searchUser(searchUserInput) {
  //   setMatchUserSet([]);
  //   for (let user of userProfile) {
  //     if (user.userName.includes(searchUserInput)) {
  //       setMatchUserSet((matchUser) => [...matchUser, user]);
  //     }
  //   }
  // }

  function searchChat(searchChatInput) {
    setMatchChatSet([]);
    chattings.map((chat) => {
      if (chat.userName === searchChatInput) {
        setMatchChatSet((matchChat) => [...matchChat, chat]);
      }
    });
    // for (let chat of chattings) {
    //   if(chat.userName.includes(searchChatInput)){
    //     setMatchChatSet((matchChat)=>[...matchChat, chat])
    //   }
    // }
  }

  return (
    <div>
      <ChattingListTopBar searchChat={searchChat} viewTitle={"채팅"} />
      <ChattingProfile matchChatSet={matchChatSet} />
    </div>
  );
}

export default ChattingList;
