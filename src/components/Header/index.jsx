import styled from "styled-components";
import Logo from "../../assets/images/logo.png";
import { TextField } from "../TextField";

const HeaderStyled = styled.header`
  padding: 60px 0;
  display: flex;
  justify-content: space-between;
  img {
    max-width: 212px;
  }
`;

export const Header = ({ onChange, value }) => {
  return (
    <HeaderStyled>
      <img src={Logo} alt="" />
      <TextField onChange={onChange} value={value} />
    </HeaderStyled>
  );
};
