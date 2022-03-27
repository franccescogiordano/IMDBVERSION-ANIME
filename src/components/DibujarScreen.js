import { Link } from "react-router-dom";
import { useDibujo } from "./useDibujo";
import { Dropdown } from "./Dropdown";
import React, { Component }  from 'react';
export const DibujarScreen = () => {
    const { click, handleClick,closeMobileMenu,dropdown,onMouseEnter,
        onMouseLeave,handleAnimeList } = useDibujo();
    return (  
        <>
        <nav className="navbar">
        <Link
                onClick={()=>handleAnimeList("tv","TV")}
                to='/' className="navbar-logo">
      
                <span>IMDB</span>VERSION-ANIME
            </Link>
            <div className="menu-icon" onClick={handleClick}>
  
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li
                    onClick={()=>handleAnimeList("upcoming","Proximamente...")}
                    className="nav-item">
                    <Link to='/' className="nav-links" onClick={closeMobileMenu}>
            
                        Por venir...
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to='/listaFavoritos' className="nav-links" onClick={closeMobileMenu}>
                       
                        Mis preferidos
                    </Link>
                </li>
                <li
                    onClick={()=>handleAnimeList("airing","Mas Famosos..")}
                    className="nav-item">
                    <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                       Mas Famoso
                    </Link>
                </li>
                <li className="nav-item"
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                >
                      <div className="nav-links" onClick={closeMobileMenu}>
                        Genero
                        </div>
                    {dropdown && <Dropdown/>}
                </li>
            </ul>
        </nav>
    </>
    )
}