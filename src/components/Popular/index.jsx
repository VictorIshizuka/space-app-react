import styled from "styled-components";
import { Title } from "../Title";

const FigureColumn = styled.section`
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

const popular = [
  { id: 1, figure: "../../assets/images/popular/foto-1.png" },
  { id: 2, figure: "../../assets/images/popular/foto-2.png" },
  { id: 3, figure: "../../assets/images/popular/foto-3.png" },
  { id: 4, figure: "../../assets/images/popular/foto-4.png" },
  { id: 5, figure: "../../assets/images/popular/foto-5.png" },
];

export const Popular = ({ popular = [] }) => {
  return (
    <section>
      <Title alignment="center">Popular</Title>
      <FigureColumn>
        {popular.map(item => {
          {
            console.log(item);
          }
          <Image src={item.figure} key={item.id} alt="" />;
        })}
        <div>test</div>
      </FigureColumn>
      <Button>Ver mais</Button>
    </section>
  );
};
