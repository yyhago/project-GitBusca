import Busca from "../components/Busca";
import User from "../components/User";
import Erro from "../components/Erro";

import { useState } from "react";
import { UserProps } from "../types/user";

export default function Home() {
  const [user, setUser] = useState<UserProps | null>(null);
  const [erro, setErro] = useState(false);

  const loadUser = async (userName: string) => {
    setErro(false)
    setUser(null)

    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();

    if (res.status === 404) {
      setErro(true);
      return;
    }

    const { avatar_url, login, location, followers, following } = data;

    const userData: UserProps = {
      avatar_url,
      login,
      location,
      followers,
      following,
    };

    setUser(userData);
  };

  return (
    <>
      <Busca loadUser={loadUser} />
      {user && <User {...user} />}
      {erro && <Erro/>}
    </>
  );
}
