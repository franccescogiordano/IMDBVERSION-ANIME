import { useDetailAnime } from "./useDetailAnime";
import React, { Component } from 'react';
export const Detalles = () => {
    const { nombreyFecha, personajesYDirectores, fotos, videos, episodes, news, moreInfo, handleFavoriteList, buscarEnlaLista, } = useDetailAnime();
    return (
        <div className="detail_contenedor">
            <div className="detail_main">
                <div className="fotos">
                    <img src={fotos[0].large} alt="anime cover" />
                </div>
                <div className="text">
                    <div className="text_title1">
                        <h2>{nombreyFecha.name}</h2>
                        <h3>{nombreyFecha.date}</h3>
                    </div>
                    <div className="text_title2">
                        <h2>Más informacion</h2>
                        <button style={buscarEnlaLista && { color: "#e63946" }} className="css-button-3d--red"
                            onClick={(e) => handleFavoriteList(e, nombreyFecha.id, fotos[0].large, nombreyFecha.name, nombreyFecha.date)}>
                            Agregar a Favoritos
                        </button>
                    </div>
                    <div className="text_content">
                        <h3>{moreInfo ? moreInfo : `Lo lamento capo, no tengo mucha informacion de este animu`}</h3>
                    </div>
                    <div className="text_character">
                        <div className="text_characters" >
                            <h3>Personajes:</h3>
                            <div className="avatar-group">
                                {
                                    personajesYDirectores.charactersLimit.map((character, idx) => {
                                        return (
                                            <div key={idx} className="avatar ">
                                                <span className="tooltiptext">{character.name}</span>
                                                <img src={character.image_url} alt="avatar" />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="text_staff" >
                            <h3>Directores:</h3>
                            <div className="avatar-group">
                                {
                                    personajesYDirectores.staffLimit.map((staff, idx) => {
                                        return (
                                            <div key={idx} className="avatar">
                                                <span className="tooltiptext">{staff.name}</span>
                                                <img src={staff.image_url} alt="avatar" />
                                            </div>

                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    {
                        videos[0] &&
                        <a style={{ textDecoration: "none" }} href={videos[0].video_url} className="btn btn-trailer">
                            Trailer del anime
                        </a>
                    }
                </div>
            </div>
            <div className="detail_episodes">
                <h3 className="detail_episodes_title">{nombreyFecha.name}<span style={{ marginLeft: "8px" }}>Lista de Episodios</span></h3>
                <div className="cards_episodes">
                    {
                        episodes.map((episode, idx) => {
                            return (
                                <div key={idx} className="card_episode">
                                    <a style={{ textDecoration: "none" }} href={episode.video_url}>

                                    </a>
                                    Ep-{episode.episode_id}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="detail_new">
                <h3> NOTICIAS DE ESTE ANIME! </h3>
                <div className="detail_new_deck">
                    {
                        news.map((singleNew, idx) => {
                            return (
                                <div
                                    key={idx}
                                    className='deck'>
                                    <a style={{ textDecoration: "none" }} href={singleNew.url}>
                                        <div className='tarjeta-new'>
                                            <header className='cardHeader'>

                                                <span className='cardHeader_account'>@{singleNew.title}</span>
                                                <span className='cardHeader_date'>{singleNew.date}</span>
                                            </header>
                                            <div className='cardBody'>
                                                <p className='cardText'>{singleNew.intro}</p>
                                                <section className='cardStats'>
                                                    <span className='cardStats_stat cardStats_stat-comments'>{singleNew.comments}

                                                    </span>
                                                </section>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}