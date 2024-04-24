import styled from "styled-components";

export const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`;

export const AppConatiner = ({ children }) => {
  return <AppContainer>{children}</AppContainer>;
};
