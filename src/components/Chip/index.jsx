import styled from "styled-components";

const ChipStyled = styled.div`
  display: flex;
  height: 50px;
  width: 94px;
  justify-content: center;
  align-items: center;
  background-color: #d9d9d94d;
  border-radius: 10px;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
`;

export const Chip = ({ children }) => {
  return <ChipStyled>{children}</ChipStyled>;
};
