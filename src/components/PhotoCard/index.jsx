import styled from "styled-components";

const Figure = styled.figure`
  width: ${props => (props.$expanded ? "90%" : "460px")};
  max-width: 100%;
  margin: 0;
  padding: 10px;
  display: flex;
  flex-direction: column;
  & > img {
    max-width: 100%;
    border-radius: 20px 20px 0 0;
  }
  figcaption {
    display: flex;
    align-items: end;
    justify-content: space-between;
    background-color: #001634;
    border-radius: 0px 0px 20px 20px;

    box-sizing: border-box;
    padding: 12px;
    height: 70px;
    h3 {
      font-family: "GandhiSansBold";
      color: white;
      font-size: 16px;
    }
    h4 {
      flex-grow: 1;
      font-size: 12px;
      font-weight: 700;
      line-height: 19.2px;
      text-align: left;
    }
    h3,
    h4,
    button {
      margin: 0;
    }
    footer {
      display: flex;
      align-items: end;
      gap: 10px;
    }
    button {
      background-color: transparent;
      border: none;
      color: white;
    }
  }
`;

export const PhotoCard = ({ figure, title, subtitle, expanded }) => {
  return (
    <Figure $expanded={expanded}>
      <img src={figure} alt="" />
      <figcaption>
        <div>
          <h3>{title}</h3>
          <h4>{subtitle}</h4>
        </div>
        <footer>
          <button>favorito</button>
          <button>zoo</button>
        </footer>
      </figcaption>
    </Figure>
  );
};
