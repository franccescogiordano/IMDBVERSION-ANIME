import { Link } from "react-router-dom";
import { UsarDibujo } from "./UsarDibujo";
import { Dropdown } from "./Dropdown";
export const DibujarScreen = () => {
    const { click, handleClick,closeMobileMenu,dropdown,onMouseEnter,
        onMouseLeave, } = UsarDibujo();
    return (  
        <>
        <nav className="navbar">
            <Link to='/' className="navbar-logo">
      
                <span>IMDB</span>VERSION-ANIME
            </Link>
            <div className="menu-icon" onClick={handleClick}>
  
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className="nav-item">
                    <Link to='/' className="nav-links" onClick={closeMobileMenu}>
            
                        Por venir...
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to='/favoritesList' className="nav-links" onClick={closeMobileMenu}>
                       
                        Mis preferidos
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                       Mas Famoso
                    </Link>
                </li>
                <li className="nav-item"
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                >
                    <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                        Genero
                    </Link>
                    {dropdown && <Dropdown/>}
                </li>
            </ul>
        </nav>
    </>
    )
}