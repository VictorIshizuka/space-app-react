import styled from "styled-components";
import IconSerach from "../../assets/images/Vector.svg";

const InputStyled = styled.input`
  background-color: transparent;
  border: solid 2px #7b78e5;
  border-radius: 10px;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
  box-sizing: border-box;
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

export const TextField = () => {
  return (
    <div style={{ display: "flex", marginRight: "-25px" }}>
      <InputStyled type="search" placeholder="O que você procura?" />
    </div>
  );
};