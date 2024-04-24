import styled from "styled-components";
import { Title } from "../Title";

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

export const Popular = ({ populares = [] }) => {
  console.log(populares);
  return (
    <section>
      <Title alignment={"center"}>Popular</Title>
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {populares.map(popular => {
          <img src={popular.figure} key={popular.id} alt="" />;
        })}
        <div>test</div>
      </div>
      <Button>Ver mais</Button>
    </section>
  );
};
