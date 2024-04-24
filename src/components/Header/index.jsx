import styled from "styled-components";
import Logo from "../../assets/images/logo.png";
import IconSerach from "../../assets/images/Vector.svg";

const HeaderStyled = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 20px 0;
  align-items: center;
`;

const InputStyled = styled.input`
  background-color: transparent;
  border: solid 2px #7b78e5;
  border-radius: 10px;
  padding-left: 16px;
  color: #d9d9d9;
  margin-right: 64px;
  height: 58px;
  width: 600px;
  &::placeholder {
    color: #d9d9d9;
    padding-left: 16px;
  }
  background-image: url(${IconSerach});
  background-position: 14.8cm 15px;
  background-repeat: no-repeat;
  align-items: center;
`;

export const Header = () => {
  return (
    <HeaderStyled>
      <img src={Logo} alt="" width={211} height={85} />
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <InputStyled type="search" placeholder="O que você procura?" />
      </div>
    </HeaderStyled>
  );
};
