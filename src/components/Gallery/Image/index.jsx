import styled from "styled-components";

import favorite from "../../../assets/images/icons/favorito.png";
import favoriteActive from "../../../assets/images/icons/favorito-ativo.png";
import expandedIcon from "../../../assets/images/icons/expandir.png";

import { ButtonIcon } from "../../ButtonIcon";

const Figure = styled.figure`
  width: ${props => (props.$expanded ? "90%" : "460px")};
  max-width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  & > img {
    max-width: 100%;
    border-radius: 20px 20px 0 0;
  }
  figcaption {
    background-color: #001634;
    border-radius: 0px 0px 20px 20px;
    color: white;
    box-sizing: border-box;
    padding: 12px;
    h3 {
      font-family: "GandhiSansBold";
    }
    h4 {
      flex-grow: 1;
    }
    h3,
    h4 {
      margin: 0;
      font-size: 16px;
    }
  }
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Image = ({
  figure,
  expanded = false,
  onZoom,
  onChangeFavorite,
}) => {
  const iconFavorite = figure.favorite ? favoriteActive : favorite;

  return (
    <Figure $expanded={expanded} id={`image-${figure.id}`}>
      <img
        src={`../../../../public/assets/images/gallery/foto-${figure.id}.png`}
        alt={figure.alt}
      />
      <figcaption>
        <h3>{figure.title}</h3>
        <Footer>
          <h4>{figure.font}</h4>
          <ButtonIcon onClick={() => onChangeFavorite(figure)}>
            <img src={iconFavorite} alt="Icone de favorito" />
          </ButtonIcon>
          {!expanded && (
            <ButtonIcon aria-hidden={expanded} onClick={() => onZoom(figure)}>
              <img src={expandedIcon} alt="Icone de expandir" />
            </ButtonIcon>
          )}
        </Footer>
      </figcaption>
    </Figure>
  );
};
