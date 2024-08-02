import styled from "styled-components";
import chips from "../../../mock/tags.json";

const ChipContainer = styled.section`
  display: flex;
  align-items: center;
  gap: 64px;
  margin-top: 56px;
`;

const TitleStyled = styled.h3`
  color: #d9d9d9;
  font-size: 24px;
  margin: 0;
`;

const ChipStyled = styled.button`
  font-size: 24px;
  color: #ffffff;
  background: rgba(217, 217, 217, 0.3);
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  padding: 12px;
  box-sizing: border-box;
  border: 2px solid transparent;
  &:hover {
    border-color: #c98cf1;
  }
`;

const Div = styled.div`
  display: flex;
  gap: 24px;
  justify-content: end;
`;

export const Chips = () => {
  return (
    <ChipContainer>
      <TitleStyled>Busque por tags:</TitleStyled>
      <Div>
        {chips.map(tag => (
          <ChipStyled key={tag.id}>{tag.title}</ChipStyled>
        ))}
      </Div>
    </ChipContainer>
  );
};
