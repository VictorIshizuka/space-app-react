import styled from "styled-components";

const BannerStyled = styled.figure`
  background-image: ${props => `url(${props.$backgroundImage})`};
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10px;
  min-height: 328px;
  max-width: 100%;
  display: flex;
  align-items: center;
  display: flex;
  align-items: center;
  flex-grow: 1;
`;

const TitleStyled = styled.h1`
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
  color: #ffffff;
  max-width: 300px;
  padding: 0 64px;
`;

export const Banner = ({ text, backgroundImage }) => {
  return (
    <BannerStyled $backgroundImage={backgroundImage}>
      <TitleStyled>{text}</TitleStyled>
    </BannerStyled>
  );
};
