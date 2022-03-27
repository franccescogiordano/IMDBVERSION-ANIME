import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'

import { animeActions } from "../actions/anime";

export const useDetailAnime = () => {


    const navigate = useNavigate();

    const dispatch = useDispatch();

    const { nombreyFecha,personajesYDirectores,fotos,videos,episodes,news,moreInfo } = useSelector(state => state.animeStreaming)
  
 //   console.log(useSelector(state=>state))
    const { listaDeFavoritors } = useSelector(state => state.listaDeFavoritors);
   
    const { actGetNameAndDate, actGetCharactersStaff, actGetPictures, actGetVideos, actGetEpisodes, actGetNews, actGetMoreInfo,actgetClearAllDetail, actGetAddAnimeFavorite, actGetRemoveAnimeFavorite,} = animeActions();

    const handleNameAndDate = (name,date,id)=>{
        dispatch(actgetClearAllDetail())
        dispatch(actGetNameAndDate(name,date,id));
        dispatch(actGetCharactersStaff(id));
        dispatch(actGetPictures(id));
        dispatch(actGetVideos(id));
        dispatch(actGetEpisodes(id));
        setTimeout(() => {
            dispatch(actGetNews(id));
            dispatch(actGetMoreInfo(id));
            navigate(`/${id}`);
        }, 600);
    }
     const handleFavoriteList = (e,id,img,name,date)=>{
        console.log("hola maria")
        e.preventDefault();

        const evaluation = listaDeFavoritors.find(favorite => favorite.id === id);
        console.log(evaluation)
        if(evaluation){
            dispatch(actGetRemoveAnimeFavorite(id));
        } else {
            dispatch(actGetAddAnimeFavorite(id,img,name,date));
        }
    }

    const buscarEnlaLista = listaDeFavoritors.find(favorite => favorite.id === nombreyFecha.id);
    return {
        nombreyFecha,
        personajesYDirectores,
        fotos,
        videos,
        episodes,
        news,
        moreInfo,
        listaDeFavoritors,
        handleNameAndDate,
        handleFavoriteList,
        buscarEnlaLista,
    }
}
