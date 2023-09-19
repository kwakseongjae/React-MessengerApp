import React, { useState } from "react";
// import ImgUploader from "../ImgUploader";
import * as S from "../../styles/Chatting.styled";
import FileInput from "../FileInput";

export default function MessageInputBar({ clickInputButton }) {
  const [messageUserInput, setMessageUserInput] = useState("");

  const enterPressed = (e) => {
    if (e.isComposing || e.keyCode === 229) return;
    if (e.key === "Enter") {
      handleClickInputButton();
    }
  };

  function handleChange(e) {
    setMessageUserInput(e.target.value);
  }

  function handleClickInputButton() {
    setMessageUserInput(messageUserInput.trim());
    if (messageUserInput !== "") {
      clickInputButton(messageUserInput);
      setMessageUserInput("");
    }
  }

  return (
    <S.MessageInputContainer>
      <FileInput />
      {/* <ImgUploader /> */}
      <S.MessageInputBox
        placeholder="메세지를 입력하세요 !"
        value={messageUserInput}
        onChange={handleChange}
        onKeyDown={enterPressed}
      />
      <S.MessageInputButton onClick={handleClickInputButton}>
        ↩
      </S.MessageInputButton>
    </S.MessageInputContainer>
  );
}
