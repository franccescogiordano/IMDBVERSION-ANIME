import axios from './index';
export const service_imdb_anime = () =>{
    const getTop =()=>{
        return axios({
            method: 'GET',
            url: '/top/anime/1/upcoming',
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
    const getRecommendations =(animeId)=>{
        return axios({
            method: 'GET',
            url: `/anime/${animeId}/recommendations`,
        })
    }

    const getSearchAnimeByName =(animeName)=>{
        return axios({
            method: 'GET',
            url: `search/anime?q=${animeName}`,
        })
    }

    return{
        getTop,
        getCharactersStaff,
        getVideos,
        getEpisodes,
        getNews,
        getRecommendations,
        getSearchAnimeByName
    }
}