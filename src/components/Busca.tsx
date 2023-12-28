import { BsSearch } from "react-icons/bs";
import { useState, KeyboardEvent } from "react";

import styled from "styled-components";
import styleModule from "./Busca.module.css"

type BuscaProps = {
  loadUser: (userName: string) => Promise<void>;
};

const ContainerBusca = styled.div`
  background-color: #474371; 
  border-radius: 2rem;
  margin: 0 auto;
  padding: 2rem;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

export default function Busca({ loadUser }: BuscaProps) {
  const [userName, setUserName] = useState("");

  const handleKeyDown = (e: KeyboardEvent) => {
    if(e.key === "Enter"){
      loadUser(userName)
    }
  }

  return (
    <ContainerBusca>
      <h2>Olá meu caro! Busque por um usuário.</h2>
      <p>E conheça os melhores repositórios do GitHub</p>
      <div className={styleModule.buscaContainer}>
        <input
          type="text"
          placeholder="Nome do usuário..."
          onChange={(e) => setUserName(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={() => loadUser(userName)}>
          <BsSearch />
        </button>
      </div>
    </ContainerBusca>
  );
}
