import { Outlet } from "react-router-dom";
import styled from "styled-components";

const TextH2 = styled.h2`
  text-align: center;
  font-size: 30px;
  background-color: #45426f;
  padding: .5%;
  margin-bottom:2%;
`;

function App() {
  return (
    <div className="App">
      <TextH2>GitHub Busca</TextH2>
      <Outlet />
    </div>
  );
}

export default App;
