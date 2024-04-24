import styled from "styled-components";
import IconHome from "../../assets/images/icons/home-inativo.png";
import IconVisible from "../../assets/images/icons/mais-vistas-inativo.png";
import IconLike from "../../assets/images/icons/mais-curtidas-inativo.png";
import IconNews from "../../assets/images/icons/novas-inativo.png";
import IconSurpriseMe from "../../assets/images/icons/surpreenda-me-inativo.png";

const DrawerStyled = styled.nav`
  color: #d9d9d9;
  width: 224px;
`;

const UlStyled = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
`;

const LiStyled = styled.li`
  display: flex;
  flex-direction: row;
  list-style: none;
  align-items: center;
`;
const ImgStyled = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;

export const Drawer = () => {
  return (
    <DrawerStyled>
      <UlStyled>
        <LiStyled>
          <ImgStyled src={IconHome} alt="" />
          <h4>Início</h4>
        </LiStyled>
        <LiStyled>
          <ImgStyled src={IconVisible} alt="" />
          <h4>Mais vistas</h4>
        </LiStyled>
        <LiStyled>
          <ImgStyled src={IconLike} alt="" />
          <h4>Mais curtidas</h4>
        </LiStyled>
        <LiStyled>
          <ImgStyled src={IconNews} alt="" />
          <h4>Novas</h4>
        </LiStyled>
        <LiStyled>
          <ImgStyled src={IconSurpriseMe} alt="" />
          <h4>Surpreenda-me</h4>
        </LiStyled>
      </UlStyled>
    </DrawerStyled>
  );
};
