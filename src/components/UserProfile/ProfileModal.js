import React, { useRef } from "react";
import * as S from "../../styles/UserProfile.styled";

const ProfileModal = ({ modalState, setModalState, detailProfile }) => {
  const modalRef = useRef();

  function closeModal(e) {
    if (modalRef.current === e.target) {
      setModalState(!modalState);
    }
  }

  return (
    <>
      {modalState ? (
        <S.Background ref={modalRef} onClick={closeModal}>
          <S.ModalWrapper modalState={modalState}>
            <h1 style={{ textAlign: "center" }}>{detailProfile.userName}</h1>
            <S.ProfileImage
              src={
                process.env.PUBLIC_URL +
                "/" +
                detailProfile.profileImage +
                ".jpg"
              }
              alt=""
            />
            <p style={{ textAlign: "center" }}>{detailProfile.statusMessage}</p>
          </S.ModalWrapper>
        </S.Background>
      ) : null}
    </>
  );
};

export default ProfileModal;
