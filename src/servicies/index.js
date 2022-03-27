import axios from './config';
export const service_imdb_anime = () =>{
    const getTop =(tier)=>{
        return axios({
            method: 'GET',
            url: `/top/anime/1/${tier}`,
        })
    }
    const getCharactersStaff  =(animeId)=>{
        return axios({
            method: 'GET',
            url: `/anime/${animeId}/characters_staff`,
        })
    }
    const getVideos  =(animeId)=>{
        return axios({
            method: 'GET',
            url: `/anime/${animeId}/videos`,
        })
    }
    const getEpisodes  =(animeId)=>{
        return axios({
            method: 'GET',
            url: `/anime/${animeId}/episodes`,
        })
    }
    const getNews =(animeId)=>{
        return axios({
            method: 'GET',
            url: `/anime/${animeId}/news`,
        })
    }
    const getMoreInfo =(animeId)=>{
        return axios({
            method: 'GET',
            url: `/anime/${animeId}/moreinfo`,
        })
    }

    const getGenre =(type)=>{
        return axios({
            method: 'GET',
            url: `search/anime?genero=${type}`,
        })
    }
    const getPictures  =(animeId)=>{
        return axios({
            method: 'GET',
            url: `/anime/${animeId}/pictures`,
        })
    }
    const getSearchAnimeByName =(animeName)=>{
        return axios({
            method: 'GET',
            url: `search/anime?q=${animeName}&limit=5`,
        })
    }

    return{
        getTop,
        getGenre,
        getCharactersStaff,
        getPictures,
        getVideos,
        getEpisodes,
        getNews,
        getMoreInfo,
        getSearchAnimeByName,
    }
}