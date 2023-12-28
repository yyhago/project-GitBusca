import { UserProps } from "../types/user";
import {MdLocationPin} from "react-icons/md"

import { Link } from "react-router-dom";

export default function User({avatar_url, login, location, followers, following}: UserProps) {
  return (
    <div>
        <img src={avatar_url} alt={login}/>
        <h2>{login}</h2>
        <p>
            <MdLocationPin/>
            <span>{location}</span>
        </p>
        <div>
            <div>
                <p>Seguidores:</p>
                <p>{followers}</p>
            </div>
            <div>
                <p>Seguindo:</p>
                <p>{following}</p>
            </div>
            <Link to={`/repos/${login}`}>Ver Repositório!</Link>
        </div>
    </div>
  )
}