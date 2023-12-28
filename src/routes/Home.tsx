import Busca from "../components/Busca";
import { useState } from "react";
import { UserProps } from "../types/user";

export default function Home() {
  const [user, setUser] = useState<UserProps | null>(null);

  const loadUser = async (userName: string) => {
    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();
    console.log(data);
  };

  return (
    <>
      <Busca loadUser = {loadUser}/>
    </>
  );
}
