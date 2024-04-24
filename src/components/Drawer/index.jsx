import styled from "styled-components";
import IconHomeActive from "../../assets/images/icons/home-ativo.png";
import IconHomeInactive from "../../assets/images/icons/home-inativo.png";
import IconVisibleActive from "../../assets/images/icons/mais-vistas-ativo.png";
import IconVisibleInactive from "../../assets/images/icons/mais-vistas-inativo.png";
import IconLikeActive from "../../assets/images/icons/mais-curtidas-ativo.png";
import IconLikeInactive from "../../assets/images/icons/mais-curtidas-inativo.png";
import IconNewsActive from "../../assets/images/icons/novas-ativo.png";
import IconNewsInactive from "../../assets/images/icons/novas-inativo.png";
import IconSurpriseMeActive from "../../assets/images/icons/surpreenda-me-ativo.png";
import IconSurpriseMeInactive from "../../assets/images/icons/surpreenda-me-inativo.png";
import { ItemNavigation } from "../ItemNavigation";

const DrawerStyled = styled.nav``;

const UlStyled = styled.ul`
  color: #d9d9d9;
  width: 224px;
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
`;

export const Drawer = () => {
  return (
    <aside>
      <DrawerStyled>
        <UlStyled>
          <ItemNavigation
            iconActive={IconHomeActive}
            iconInactive={IconHomeInactive}
          >
            Início
          </ItemNavigation>
          <ItemNavigation
            iconActive={IconVisibleActive}
            iconInactive={IconVisibleInactive}
          >
            Mais vistas
          </ItemNavigation>
          <ItemNavigation
            iconActive={IconLikeActive}
            iconInactive={IconLikeInactive}
          >
            Mais curtidas
          </ItemNavigation>
          <ItemNavigation
            iconActive={IconNewsActive}
            iconInactive={IconNewsInactive}
          >
            Novas
          </ItemNavigation>
          <ItemNavigation
            iconActive={IconSurpriseMeActive}
            iconInactive={IconSurpriseMeInactive}
          >
            Surpreenda-me
          </ItemNavigation>
        </UlStyled>
      </DrawerStyled>
    </aside>
  );
};
