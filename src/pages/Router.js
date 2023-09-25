import { Route, Routes } from "react-router-dom";
import UserProfile from "./UserProfile";
import ChattingList from "./ChattingList";
import Chatting from "./Chatting";
import MoreView from "./MoreView";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/chatting-list" element={<ChattingList />} />
        <Route path="/more" element={<MoreView />} />
        <Route path="/chat-with/:userID" element={<Chatting />} />
      </Routes>
    </>
  );
};

export default Router;
