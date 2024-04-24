import styled from "styled-components";

const LiStyled = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  img {
    padding-right: 10px;
  }
`;

export const ItemNavigation = ({
  children,
  iconActive,
  iconInactive,
  active = false,
}) => {
  return (
    <>
      <LiStyled>
        <img src={active ? iconActive : iconInactive} />
        {children}
      </LiStyled>
    </>
  );
};
