import { types } from "../types/types";

const initialState ={
    nameList:[],
    animeList:[],
    nombreyFecha:[],
    personajesYDirectores:[],
    fotos:[],
    videos:[],
    episodes:[],
    news:[],
    moreInfo:[],
    searchAnime:[],
}

export const animeReducer = (state=initialState, action) => {
    switch (action.type) {
        case types.getListTopAnimes:
            return{
                ...state,
                animeList: action.payload
            }
        case types.getListWithGenre:
            return{
                ...state,
                animeList: action.payload
            }
        case types.getNameAndDate:
            return{
                ...state,
                nombreyFecha: action.payload
            }
        case types.getlistCharactersStaff:
            return{
                ...state,
                personajesYDirectores: action.payload
            }
        case types.getListPictures:
            return{
                ...state,
                fotos: action.payload
            }
        case types.getListVideos:
            return{
                ...state,
                videos: action.payload
            }
        case types.getListEpisodes:
            return{
                ...state,
                episodes: action.payload
            }
        case types.getListNews:
            return{
                ...state,
                news: action.payload
            }
        case types.getMoreInfo:
            return{
                    ...state,
                moreInfo: action.payload
            }
        case types.getSearchAnime:
            return{
                ...state,
                searchAnime: action.payload
            }
        case types.getTitleOfListAnime:
            return{
                ...state,
                nameList: action.payload
            }
        case types.getClearAllDetail:
            console.log("getClearAllDetail reducerAnime:",initialState);
            return{
                ...state,
                nombreyFecha: initialState.nombreyFecha,
                personajesYDirectores: initialState.personajesYDirectores,
                fotos: initialState.fotos,
                videos: initialState.videos,
                episodes: initialState.episodes,
                news: initialState.news,
                moreInfo: initialState.moreInfo,
            }
        default:
            return state;
    }
}
