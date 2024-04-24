import styled from "styled-components";

export const AppContainerStyled = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`;

export const AppContainer = ({ children }) => {
  return <AppContainerStyled>{children}</AppContainerStyled>;
};
