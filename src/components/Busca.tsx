import { BsSearch } from "react-icons/bs";

export default function Busca() {
    return(
        <div>
            <h2>Olá meu caro! Busque por um usuário.</h2>
            <p>E conheça os melhores repositórios do GitHub</p>
                <div>
                    <input type="text" placeholder="Digite o nome do usuário"/>
                    <button>
                        <BsSearch/>
                    </button>
                </div>
        </div>
    )
}
