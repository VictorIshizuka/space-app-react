import styled from "styled-components";

const LiStyled = styled.li`
  display: flex;
  align-items: center;
  gap: 22px;
  color: ${props => (props.$active ? "#7B78E5" : "#D9D9D9")};
  font-family: ${props =>
    props.$active ? "GandhiSansBold" : "GandhiSansRegular"};
  padding-top: 10px;
  font-size: 24px;
  line-height: 29px;
  margin-bottom: 30px;
  cursor: pointer;
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
      <LiStyled $active={active}>
        <img src={active ? iconActive : iconInactive} />
        {children}
      </LiStyled>
    </>
  );
};
