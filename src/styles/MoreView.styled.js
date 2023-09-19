import styled from "styled-components";

export const Container = styled.div`
  h1 {
    margin-left: 10px;
  }
  width: 412px;
  height: 768px;
`;
export const ProfileName = styled.div`
  text-align: center;
`;

export const ProfileImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 30%;
  background-position: 0px 0px;
  overflow: hidden;
  &:focus {
    outline: none;
  }
`;

export const ProfileImageNew = styled(ProfileImage)`
  width: 150px;
  height: auto;
`;
export const ProfileContainer = styled.div`
  width: 412px;
  height: 300px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: 1px;
  border-color: #b1b1b1;
  background-color: #fffffa;
  border-radius: 10px;
`;
