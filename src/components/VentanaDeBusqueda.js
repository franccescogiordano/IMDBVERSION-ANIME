import { useBuscador } from "./useBuscador";
import React, { Component }  from 'react';
export const VentanaDeBusqueda = () => {
    const { buscarAnime } = useBuscador();
    return (
        <div className="searchWindow_contenedor">
        {
            buscarAnime.map((search,idx)=>{
                return(
                    <div key={idx} className="search-tarjeta">
                        <img src={search.image_url} alt="art" />
                        <div className="search-content">
                            <div className="search-header">
                                <h1 className="search-title">{search.title}</h1>
                                <h4 className="search-info">
        
                                    score: {search.score}
                                </h4>
                            </div>
                            <p className="search-desc">{search.synopsis}</p>
                            <div style={{marginTop:"15px"}}>
                                <a  href={search.url} style={{textDecoration:"none", textAlign:"end"}} className="btn btn-more-infor">Ver Mas</a>
                            </div>
                        </div>
                    </div>
                )
            })
        }
        </div>
    )
}