import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { friendsState, userState } from "../../states/atoms/user";
import { useNavigate } from "react-router-dom";
import { chattingStateByUserId } from "../../states/atoms/chattings";
import userProfileSet from "../../states/datas/User";
import ChattingListTopBar from "../ChattingList/ChattingListTopBar";
import ProfileOfUsers from "./ProfileOfUsers";
import ProfileModal from "./ProfileModal";

function ProfileListView() {
  const friendProfile = useRecoilValue(friendsState);
  const myProfile = useRecoilValue(userState);
  const userProfile = [];
  userProfile.push(myProfile);
  friendProfile.map((friend) => userProfile.push(friend));
  

  const [matchUserSet, setMatchUserSet] = useState(userProfile);
  const [modalState, setModalState] = useState(false);
  const [detailProfile, setDetailProfile] = useState(userProfile[0]);

  function handleModal(selectedProfile) {
    setModalState(!modalState);
    setDetailProfile(selectedProfile);
  }

  function searchUser(searchUserInput) {
    setMatchUserSet([]);
    for (let user of userProfile) {
      if (user.userName.includes(searchUserInput)) {
        setMatchUserSet((matchUser) => [...matchUser, user]);
      }
    }
  }

  return (
    <div>
      <ProfileModal
        modalState={modalState}
        setModalState={setModalState}
        detailProfile={detailProfile}
      />
      <ChattingListTopBar searchUser={searchUser} viewTitle={"친구"} />
      <ProfileOfUsers userProfileSet={matchUserSet} handleModal={handleModal} />
    </div>
  );
}

export default ProfileListView;
