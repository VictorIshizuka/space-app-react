import styled from "styled-components";

const TitleStyled = styled.h1`
  color: #7b78e6;
  font-size: 32px;
  text-align: ${props => (props.$alignment ? props.$alignment : "left")};
`;

export const Title = ({ children, alignment }) => {
  return <TitleStyled $alignment={alignment}>{children}</TitleStyled>;
};
