import { Link } from "react-router-dom";
import { useDibujo } from "./useDibujo";
import { generos } from "./generos";
import React, { Component }  from 'react';
export const Dropdown = () => {

    const { click, handleClick,closeMobileMenu ,handleAnimeByGenre} = useDibujo();

    return (
        <>
            <ul onClick={handleClick} className={click ? "dropdown-menu clicked" : "dropdown-menu"}>
                {
                    generos.map((genero,idx)=>{
                        return(
                            <li
                            onClick={()=>handleAnimeByGenre(genero.number,genero.name)}
                            key={idx}>
                                <Link
                                to="/"
                                className="dropdown-link"
                                onClick={closeMobileMenu}
                                >
                                    {genero.name}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}