import { NotFound404 } from "./NotFound404"
export const AnimeFavorito = () => {
    return (
        <div className="favorite_wrapper">
            <h3> tu lista de animes favoritos </h3>
            <div className="container_card">
                <NotFound404/>
            </div>
        </div>
    )
}