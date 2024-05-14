import styled from "styled-components";

const ChipStyled = styled.div`
  display: flex;
  height: 50px;
  width: 94px;
  justify-content: center;
  align-items: center;
  background-color: #d9d9d94d;
  border-radius: 10px;
`;

const TitleStyled = styled.h3`
  color: #d9d9d9;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  margin: 0;
`;

export const Chip = ({ title }) => {
  return (
    <ChipStyled>
      <TitleStyled>{title}</TitleStyled>
    </ChipStyled>
  );
};
