import styled from "styled-components";
import BannerImage from "../../assets/images/banner.png";

const BannerStyled = styled.img`
  border-radius: 10px;
  height: 328px;
  width: 1170px;
`;

export const Banner = () => {
  return <BannerStyled src={BannerImage} alt="" />;
};
