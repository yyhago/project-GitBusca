import { BsSearch } from "react-icons/bs";
import { useState } from "react";

type BuscaProps = {
  loadUser: (userName: string) => Promise<void>;
};

export default function Busca({ loadUser }: BuscaProps) {

    const [userName, setUserName] = useState("")

  return (
    <div>
      <h2>Olá meu caro! Busque por um usuário.</h2>
      <p>E conheça os melhores repositórios do GitHub</p>
      <div>
        <input
          type="text"
          placeholder="Digite o nome do usuário"
          onChange={(e) => setUserName(e.target.value)}
        />
        <button onClick={() => loadUser(userName)}>
          <BsSearch />
        </button>
      </div>
    </div>
  );
}
