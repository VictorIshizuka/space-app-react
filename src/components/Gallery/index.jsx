import styled from "styled-components";
import { Title } from "../Title";
import { PhotoCard } from "../PhotoCard";
import { Popular } from "../Popular";
import { Chip } from "./../Chip";

const GalleryStyled = styled.div`
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

const tags = [
  {
    id: 0,
    title: "Todas",
  },
  {
    id: 1,
    title: "Estrelas",
  },
  {
    id: 2,
    title: "Galáxias",
  },
  {
    id: 3,
    title: "Luas",
  },
  {
    id: 4,
    title: "Planetas",
  },
];

export const Gallery = ({ photos = [], popular = [], onFigureSelected }) => {
  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "150px 1fr 1fr 1fr 1fr 1fr ",
          alignItems: "center",
          paddingTop: "10px",
          paddingBottom: "10px",
          marginLeft: "40px",
          marginRight: "400px",
        }}
      >
        <p style={{ marginRight: "10px" }}>Busque por tagas:</p>
        {tags.map(tag => (
          <Chip key={tag.id} title={tag.title} />
        ))}
      </div>
      <GalleryStyled>
        <SectionStyled>
          <Title>Navegue pela galeria</Title>
          <FiguresContainer>
            {photos.map(photo => (
              <PhotoCard
                key={photo.id}
                onZoom={onFigureSelected}
                figure={photo}
              />
            ))}
          </FiguresContainer>
        </SectionStyled>
        <Popular popular={popular} />
      </GalleryStyled>
    </>
  );
};
