import styled from "styled-components";
import { Popular } from "./Popular";
import { Image } from "./Image";
import { Chips } from "./Chip";
import { Title } from "../Title";

const GalleryContainer = styled.div`
  display: flex;
  gap: 24px;
`;

const SectionStyled = styled.section`
  flex-grow: 1;
`;

const FiguresContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`;

export const Gallery = ({
  photos = [],
  onFigureSelected,
  onClick,
  chips,
  onChangeFavorite,
}) => {
  return (
    <>
      <Chips onClick={onClick} chips={chips} />
      <GalleryContainer>
        <SectionStyled>
          <Title>Navegue pela galeria</Title>
          <FiguresContainer>
            {photos.map(photo => (
              <Image
                onZoom={onFigureSelected}
                key={photo.id}
                figure={photo}
                onChangeFavorite={onChangeFavorite}
              />
            ))}
          </FiguresContainer>
        </SectionStyled>
        <Popular />
      </GalleryContainer>
    </>
  );
};
