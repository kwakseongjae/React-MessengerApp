import { Route, Routes } from "react-router-dom";
import ProfileListView from "./UserProfile/ProfileListView";
import ChattingList from "./ChattingList/ChattingListView";
import ChattingView from "./Chatting/MessageChattingView";
import MoreView from "./MoreView";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/profile" element={<ProfileListView />} />
        <Route path="/chatting-list" element={<ChattingList />} />
        <Route path="/chat-with/:userID" element={<ChattingView />} />
        <Route path="/more" element={<MoreView />} />
      </Routes>
      ;
    </>
  );
};

export default Router;
