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
                    generos.map((genre,idx)=>{
                        return(
                            <li
                            onClick={()=>handleAnimeByGenre(genre.number,genre.name)}
                            key={idx}>
                                <Link
                                to="/"
                                className="dropdown-link"
                                onClick={closeMobileMenu}
                                >
                                    {genre.name}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}