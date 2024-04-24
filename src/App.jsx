import styled from "styled-components";
import { GlobalStyles } from "./components/GlobalStyles";
import { Header } from "./components/Header";
import { Drawer } from "./components/Drawer";
import { Banner } from "./components/Banner";
import { Chip } from "./components/Chip";
import BannerImage from "../src/assets/images/banner.png";
import { AppContainer } from "./components/AppContainer";
import { MainContainer } from "./components/Container";
import { Gallery } from "./components/Gallery";
import Photos from "../src/mock/photos.json";
import Popular from "../src/mock/popular.json";

console.log(Photos);
console.log(Popular);

const GradientBackground = styled.div`
  background: linear-gradient(
    174.61deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );

  width: 100%;
  min-height: 100vh;
  padding-left: 24px;
  padding-right: 24px;
  color: #94a3b8;
`;

const tags = [
  {
    id: 0,
    title: "Todas",
  },
  {
    id: 1,
    title: "Estrelas",
  },
  {
    id: 2,
    title: "Galáxias",
  },
  {
    id: 3,
    title: "Luas",
  },
  {
    id: 4,
    title: "Planetas",
  },
];

function App() {
  return (
    <GradientBackground>
      <GlobalStyles />
      <AppContainer>
        <Header />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 5fr" }}>
          <Drawer />
          <MainContainer>
            <Banner
              backgroundImage={BannerImage}
              text=" A galeria mais completa de fotos do espaço!"
            />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "150px 1fr 1fr 1fr 1fr 1fr ",
                alignItems: "center",
                paddingTop: "10px",
                paddingBottom: "10px",
                marginLeft: "40px",
                marginRight: "400px",
              }}
            >
              <p style={{ marginRight: "10px" }}>Busque por tagas:</p>
              {tags.map(tag => (
                <Chip key={tag.id} title={tag.title} />
              ))}
            </div>

            <Gallery photos={Photos} popular={Popular} />
          </MainContainer>
        </div>
      </AppContainer>
    </GradientBackground>
  );
}

export default App;
