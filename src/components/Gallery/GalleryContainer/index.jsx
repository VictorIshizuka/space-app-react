import styled from "styled-components";

const GalleryContainerStyled = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const GalleryContainer = ({ children }) => {
  return <GalleryContainerStyled>{children}</GalleryContainerStyled>;
};
