import { RiKakaoTalkFill } from "react-icons/ri";
import { AiOutlineWifi } from "react-icons/ai";
import * as S from "../styles/StatusBar.styled";
import Clock from "react-live-clock";

const StatusBar = () => {
  return (
    <S.StatusContainer>
      <RiKakaoTalkFill size="25" />
      <AiOutlineWifi size="25" style={{ marginLeft: "5px" }} />
      <Clock
        format={"HH:mm"}
        ticking={true}
        timezone={"Asia/Seoul"}
        style={{ fontSize: "25px", marginLeft: "5px" }}
      />
    </S.StatusContainer>
  );
};

export default StatusBar;
