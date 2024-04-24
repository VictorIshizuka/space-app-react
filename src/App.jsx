import styled from "styled-components";
import { GlobalStyles } from "./components/GlobalStyles";

const GradientBackground = styled.body`
  background: linear-gradient(
    174.61deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  width: 100%;
  height: 100%;
  color: #94a3b8;
`;

function App() {
  return (
    <GradientBackground>
      <GlobalStyles />
      space app
    </GradientBackground>
  );
}

export default App;
