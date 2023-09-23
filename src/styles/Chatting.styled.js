import styled from "styled-components";

export const Container = styled.div`
  width: 412px;
  height: 768px;

  display: flex;
  flex-direction: column;
`;

export const ChattingImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 70%;
  overflow: hidden;
  margin: 15px 15px 0px 15px;

  flex-shrink: 0;
`;

export const ChattingContext = styled.div`
  line-height: 28px;
  font-size: 15px;
  border: 1px solid #e99ba7;
  border-radius: 22px;
  margin: 15px 0px 0px;
  padding: 10px;
  background-color: #f4f4f4;
  color: gray;
`;
export const ChattingBubble = styled.div`
  display: flex;
  flex-direction: ${(props) =>
    props.chattingUser === 1 ? "row-reverse" : "row"};
`;

export const ChattingContainer = styled.div`
  width: 412px;
  height: 628px;
  flex-grow: 1;
  background-image: url(${process.env.PUBLIC_URL + "/backgroundImg.jpg"});
  background-repeat: repeat;
`;

export const MessageInputContainer = styled.div`
  width: 412px;
  height: 60px;

  color: grey;
  display: flex;
  border-top: solid 1px #f9e498;
  justify-content: space-evenly;
  align-items: center;

  bottom: 0px;

  background-color: #f9e498;
`;

export const ImgUpload = styled.img`
  width: 10%;
  height: 40px;
`;

export const MessageInputBox = styled.input`
  width: 80%;
  height: 40px;

  color: grey;
  border: 0.5px #d16f80 solid;
  text-align: center;
  border-radius: 30px;
  &:focus {
    outline: none;
  }
`;
export const MessageInputButton = styled.button`
  color: #f4f4f4;
  width: 10%;
  height: 44px;
  border-radius: 10px;
  background-color: #ba4f5f;
  border: 0.5px #ba4f5f solid;
  text-align: center;
  margin: 1%;
  font-size: 18px;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: #d16f80;
  }
`;

export const TopBox = styled.div`
  width: 412px;
  height: 80px;
  background-color: #f9e498;
  color: #ba4f5f;
  display: flex;
  align-items: center;
  border-bottom: solid 1px #d16f80;
`;

export const ProfileImageButton = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 70%;
  overflow: hidden;
  margin: 10px;
  padding: 0px;
  border: none;
  &:focus {
    outline: none;
  }
`;

export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;

  overflow: hidden;
  &:focus {
    outline: none;
  }
`;
export const ProfileName = styled.div`
  padding-left: 5px;
  line-height: 60px;
  font-size: 20px;
`;
