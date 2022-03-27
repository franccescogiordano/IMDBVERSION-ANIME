import { TarjetaAnime } from "./TarjetaAnime"
import { useDibujo } from "./useDibujo";
import React, { Component }  from 'react';
export const PantallaPrincipal = () => {
    const { animeList, nameList } = useDibujo();
    return (
        <div className="anime_contenedor">
        <h3 > {nameList} </h3>
        <div className="container_card">
        {
                    animeList.map((anime,idx)=>{
                        return(
                            <TarjetaAnime key={idx} {...anime}/>
                        )
                    })
                }
     
        </div>
        </div>
    )
}