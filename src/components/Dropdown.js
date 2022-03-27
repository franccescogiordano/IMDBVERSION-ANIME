import { Link } from "react-router-dom";
import { UsarDibujo } from "./UsarDibujo";
import { generos } from "./generos";
export const Dropdown = () => {

    const { click, handleClick,closeMobileMenu } = UsarDibujo();

    return (
        <>
            <ul onClick={handleClick} className={click ? "dropdown-menu clicked" : "dropdown-menu"}>
                {
                    generos.map((genre,idx)=>{
                        return(
                            <li key={idx}>
                            <Link
                            to="#"
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