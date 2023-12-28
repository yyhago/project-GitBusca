import { Outlet } from "react-router-dom";
import styled from "styled-components";

const TextH2 = styled.h2`
  text-align: center;
  padding: .5rem;
  font-size: 30px;
  background-color: #474371;
  margin-bottom: 30px;
  border-radius: 1rem;
`;

const ContainerApp = styled.div`
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
`;

function App() {
  return (
    <ContainerApp>
      <TextH2>GitHub Busca</TextH2>
      <Outlet />
    </ContainerApp>
  );
}

export default App;
