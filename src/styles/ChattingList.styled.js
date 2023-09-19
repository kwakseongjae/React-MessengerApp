import styled from "styled-components";

export const SearchChatting = styled.input`
  width: 100%;
  height: 30px;

  padding: 0px;
  font-size: 18px;
  border: 0px #e99ba7 solid;
  border-radius: 7px;
  background-color: #ecd0d0;
  &:focus {
    outline: none;
  }
`;

export const ChattingListContainer = styled.div`
  h1 {
    margin-left: 10px;
  }
  width: 412px;
  height: 120px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 70%;
  margin: 15px;
`;

export const ProfileName = styled.div`
  color: #000000;
  line-height: 25px;
  font-size: 15px;
  margin: 5px 0px 3px;
  padding: 6px;
`;

export const LastMessage = styled.p`
  color: #4169e1;
  font-size: 15px;
  margin: 0;
  padding-left: 10px;
`;

export const ProfileBubbleContainer = styled.div`
  width: 412px;
  height: auto;

  display: flex;
  background-color: #f4f4f4;
  border-top: 1px solid #e99ba7;
  &:hover {
    background-color: #f0d7d7;
  }
`;
