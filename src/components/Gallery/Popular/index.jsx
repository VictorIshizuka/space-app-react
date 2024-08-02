import styled from "styled-components";

import photos from "../../../mock/popular.json";
import { Title } from "../../Title";

const ImageColumn = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Image = styled.img`
  max-width: 212px;
  border-radius: 20px;
`;

const Button = styled.button`
  background-color: transparent;
  color: #fff;
  border: 2px solid;
  border-color: #c98cf1;
  padding: 12px 20px;
  font-size: 20px;
  border-radius: 10px;
  cursor: pointer;
  width: 100%;
  margin-top: 16px;
`;

export const Popular = () => {
  return (
    <>
      <section>
        <Title $alignment="center">Populares</Title>
        <ImageColumn>
          {photos.map(photo => (
            <Image
              key={photo.id}
              src={`../../../../public/assets/images/popular/foto-${photo.id}.png`}
              alt={photo.alt}
            />
          ))}
        </ImageColumn>
        <Button>Ver mais</Button>
      </section>
    </>
  );
};
