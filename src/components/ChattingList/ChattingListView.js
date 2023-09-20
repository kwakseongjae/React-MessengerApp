import React, { useState } from "react";
import ChattingProfile from "./ChattingProfile";
import ChattingListTopBar from "./ChattingListTopBar";
import userProfileSet from "../../states/datas/User";

function ChattingList() {
  const [matchUserSet, setMatchUserSet] = useState(userProfileSet);

  const searchUser = (searchUserInput) => {
    const matchedProfiles = userProfileSet.filter((userProfile) =>
      userProfile.name.includes(searchUserInput)
    );
    setMatchUserSet(matchedProfiles);
  };

  return (
    <div>
      <ChattingListTopBar searchUser={searchUser} viewTitle={"채팅"} />
      <ChattingProfile userProfileSet={matchUserSet} />
    </div>
  );
}

export default ChattingList;
