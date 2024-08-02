import { useState } from "react";

import styled from "styled-components";

import Photos from "./mock/photos.json";

import BannerImage from "./assets/images/banner.png";

import { GlobalStyles } from "./components/GlobalStyles";
import { Header } from "./components/Header";
import { Drawer } from "./components/Drawer";
import { Banner } from "./components/Banner";
import { Gallery } from "./components/Gallery";
import { Modal } from "./components/Modal";

const GradientBackground = styled.div`
  background: linear-gradient(
    174.61deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );

  width: 100%;
  min-height: 100vh;
  color: #94a3b8;
`;

const MainContainerStyled = styled.main`
  display: flex;
  gap: 24px;
`;

const AppContainerStyled = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`;

const ContentGallery = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

function App() {
  const [isFigureGallery, setIsFigureGallery] = useState(Photos);
  const [isFigureSelected, setIsSelected] = useState(null);

  return (
    <GradientBackground>
      <GlobalStyles />
      <AppContainerStyled>
        <Header />
        <MainContainerStyled>
          <Drawer />
          <ContentGallery>
            <Banner
              backgroundImage={BannerImage}
              text=" A galeria mais completa de fotos do espaço!"
            />
            <Gallery
              photos={isFigureGallery}
              onFigureSelected={figure => setIsSelected(figure)}
            />
          </ContentGallery>
        </MainContainerStyled>
      </AppContainerStyled>
      <Modal figure={isFigureSelected} onClose={() => setIsSelected(null)} />
    </GradientBackground>
  );
}

export default App;
