import styled from "styled-components";
import favorite from "../../assets/images/icons/favorito.png";
import expandedIcon from "../../assets/images/icons/expandir.png";

const Figure = styled.figure`
  width: ${props => (props.$expandida ? "90%" : "460px")};
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
    h4,
    button {
      margin: 0;
      font-size: 16px;
    }
    button {
      background-color: transparent;
      border: none;
      color: white;
    }
    footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

export const PhotoCard = ({ figure, expanded = false, onZoom }) => {
  return (
    <Figure $expanded={expanded} id={`foto-${figure.id}`}>
      <img src={figure.figure} alt="" />
      <figcaption>
        <h3>{figure.title}</h3>

        <footer>
          <h4>{figure.subtitle}</h4>
          <button>
            <img src={favorite} alt="Icone de favorito" />
          </button>
          {!expanded && (
            <button aria-hidden={expanded} onClick={() => onZoom(figure)}>
              <img src={expandedIcon} alt="Icone de expandir" />
            </button>
          )}
        </footer>
      </figcaption>
    </Figure>
  );
};
