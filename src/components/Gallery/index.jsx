import styled from "styled-components";
import { Title } from "../Title";
import { Popular } from "../Popular";
import { PhotoCard } from "../PhotoCard";
import { GalleryContainer } from "./GalleryContainer";

const GalleryStyled = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr;
  margin-left: 35px;
`;
const DivStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Gallery = ({ photos = [] }) => {
  console.log(photos);
  return (
    <GalleryStyled>
      <DivStyled>
        <Title>Navegue pela galeria</Title>
        <GalleryContainer>
          {photos.map(photo => (
            <PhotoCard
              key={photo.id}
              figure={photo.figure}
              title={photo.title}
              subtitle={photo.subtitle}
            />
          ))}
        </GalleryContainer>
      </DivStyled>
      <Popular />
    </GalleryStyled>
  );
};
