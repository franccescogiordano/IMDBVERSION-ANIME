import { types } from "../types/types";

const initialState ={
    listaDeFavoritors:[],
}

export const favReducer = (state=initialState, action) => {
    switch (action.type) {
        case types.getAddAnimeFavorite:
            return{
                ...state,
                listaDeFavoritors: [...state.listaDeFavoritors, action.payload]
            }
        case types.getRemoveAnimeFavorite:
            return {
                ...state,
                listaDeFavoritors: state.listaDeFavoritors.filter( favorite =>  favorite.id !== action.payload
                )
            }
        default:
            return state;
    }
}