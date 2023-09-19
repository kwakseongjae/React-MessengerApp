import { useState } from "react";
import * as S from "../styles/ImgUploader.styled";

const ImgUploader = () => {
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
  return (
    <S.Container>
      <input
        accept="image/*"
        multiple
        type="file"
        onChange={(e) => onUpload(e)}
      />
      <img width={"100%"} src={imageSrc} />
    </S.Container>
  );
};

export default ImgUploader;
