import styled from "styled-components";
import Logo from "../../assets/images/logo.png";
import { TextField } from "../TextField";

const HeaderStyled = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 20px 0;
  align-items: center;
  img {
    max-width: 212px;
  }
`;

export const Header = () => {
  return (
    <HeaderStyled>
      <img src={Logo} alt="" />
      <TextField />
    </HeaderStyled>
  );
};
