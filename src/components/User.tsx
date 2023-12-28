import { UserProps } from "../types/user";
import {MdLocationPin} from "react-icons/md"

import { Link } from "react-router-dom";

import classCss from "./User.module.css"

export default function User({avatar_url, login, location, followers, following}: UserProps) {
  return (
    <div className={classCss.user}>
        <img src={avatar_url} alt={login}/>
        <h2>{login}</h2>
        {location && (
        <p className={classCss.locacao}>
            <MdLocationPin/>
            <span>{location}</span>
        </p>
        )}
        <div className={classCss.status}>
            <div>
                <p>Seguidores:</p>
                <p className={classCss.number}>{followers}</p>
            </div>
            <div>
                <p>Seguindo:</p>
                <p className={classCss.number}>{following}</p>
            </div>
        </div>
        <Link to={`/repos/${login}`}>Ver Repositório!</Link>
    </div>
  )
}
