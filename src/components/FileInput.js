import { useRef, useState } from "react";
import * as S from "../styles/FileInput.styled";
import { AiOutlinePlus } from "react-icons/ai";

const FileInput = () => {
  const ref = useRef(null);
  const [imageSrc, setImageSrc] = useState(null);

  const onUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result || null); // 파일의 컨텐츠
        resolve();
      };
    });
  };
  
  const onClick = () => {
    ref.current?.click();
  };

  return (
    <S.FileInputContainer>
      <S.FileInputButton onClick={onClick}>
        <AiOutlinePlus size="30" />
        <input
          hidden
          accept="image/*"
          multiple
          type="file"
          onChange={(e) => onUpload(e)}
          ref={ref}
        />
      </S.FileInputButton>
    </S.FileInputContainer>
  );
};

export default FileInput;
