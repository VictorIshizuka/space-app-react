import styled from "styled-components";

export const MainContainerStyled = styled.main`
  display: flex;

  flex-direction: column;
  justify-content: center;
`;

export const MainContainer = ({ children }) => {
  return <MainContainerStyled>{children}</MainContainerStyled>;
};
