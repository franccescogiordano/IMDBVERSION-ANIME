import { NotFound404 } from "./NotFound404"
import { useDetailAnime } from "./useDetailAnime";
import { TarjetaFavorito } from "./TarjetaFavorito";
import React, { Component }  from 'react';
export const AnimeFavorito = () => {
    const { listaDeFavoritors, } = useDetailAnime();
    return (
        <div className="favorite_contenedor">
            <h3> Tu lista de animes favoritos </h3>
            <div className="container_card"
                    style={{marginTop:"20px"}}>
                {
                    listaDeFavoritors.length > 0
                    ? (listaDeFavoritors.map((favorite,idx)=>{
                        return(
                            <TarjetaFavorito key={idx} {...favorite}/>
                        )
                    }))
                    :(<NotFound404/>)
                }
            </div>
        </div>
    )
}