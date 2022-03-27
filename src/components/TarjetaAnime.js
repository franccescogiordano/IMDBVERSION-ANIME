
import { useDetalle } from "./useDetalle";
import React  from 'react';
export const TarjetaAnime = (anime) => {
    const { handleNameAndDate } = useDetalle();
    return (
        <div
        onClick={()=>handleNameAndDate(anime.title,anime.start_date,anime.mal_id)}
        className="tarjeta">
            <div>
                <div className="img1"
                style={{backgroundImage: `url(${anime.image_url})`}}
                ></div>
                <div className="img2"
                style={{backgroundImage: `url(${anime.image_url})`}}
                ></div>
                <div className="title">{anime.title}</div>
                <div className="text-tarjeta">
                    Start date: { anime.start_date }
                    <br/>
                    Start date: { anime.end_date ? anime.end_date : `Unknown date` }
                </div>
                <div className="score">{anime.score}
                  
                </div>
                <div className="rank">{anime.rank}
                 
                </div>
                <div className="catagory">{anime.type}
                 
                </div>
                <div className="views">{anime.members}
               
                </div>
            </div>
        </div>
    )
}