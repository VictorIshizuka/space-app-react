import styled from "styled-components";
import { GlobalStyles } from "./components/GlobalStyles";
import { Header } from "./components/Header";
import { Drawer } from "./components/Drawer";
import { Banner } from "./components/Banner";
import { Chip } from "./components/Chip";

const GradientBackground = styled.div`
  background: linear-gradient(
    174.61deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );

  width: 100%;
  height: 100vh;
  padding-left: 24px;
  padding-right: 24px;
  color: #94a3b8;
`;

function App() {
  return (
    <GradientBackground>
      <GlobalStyles />
      <Header />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 5fr" }}>
        <Drawer />
        <div>
          <Banner />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "100px 100px 100px 100px 100px 100px ",
              gridGap: "10px",
              alignItems: "center",
              paddingTop: "20px",
              paddingBottom: "20px",
            }}
          >
            <p>Busque por tagas:</p>
            <Chip>Estrelas</Chip>
            <Chip>Galáxias</Chip>
            <Chip>Lua</Chip>
            <Chip>Planetas</Chip>
            <Chip>Todas</Chip>
          </div>
          <div></div>
          <div>conteudo</div>
        </div>
      </div>
    </GradientBackground>
  );
}

export default App;
