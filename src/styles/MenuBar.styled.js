import styled from "styled-components";

export const MenuContainer = styled.div`
  width: 100px;
  height: 768px;

  background-color: #fd5c63;
`;

export const MenuButton = styled.button`
  width: 100%;
  height: auto;
  margin-top: 25px;

  background: none;
  border: none;

  opacity: ${(props) => (props.clicked === 1 ? "100%" : "40%")};
  &:focus {
    outline: none;
    opacity: 100%;
  }
  &:hover {
    opacity: 60%;
  }
`;
export const ButtonImage = styled.img`
  width: 60%;
  height: 60%;
  background-position: 0px 0px;
  &:focus {
    outline: none;
  }
`;
