import styled from "styled-components";

export const Background = styled.div`
  width: 412px;
  height: 768px;

  position: fixed;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWrapper = styled.div`
  width: 100%;
  height: auto%;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  position: relative;
  z-index: 90;
  border-radius: 10px;
  padding: 30px;
`;

export const ProfileImage = styled.img`
  margin: 0 7.5%;
  width: 85%;
  height: 50%;
  object-fit: contain;
`;

export const ProfileImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 70%;
  margin: 15px;
`;

export const ProfileName = styled.div`
  line-height: 25px;
  font-size: 15px;

  color: gray;
`;

export const LastMessage = styled.p`
  color: #4169e1;
  font-size: 15px;
  margin: 0;
  padding-left: 10px;
`;

export const ProfileBubbleContainer = styled.div`
  display: flex;
  background-color: #f4f4f4;
  border-top: 1px solid #e99ba7;
  &:hover {
    background-color: #f0d7d7;
  }
`;

export const ProfileMessage = styled(LastMessage)`
  color: gray;
`;

export const UserName = styled(ProfileName)`
  color: #000000;
  font-size: 15px;
  margin: 5px 0px 3px;
  padding: 6px;
`;
