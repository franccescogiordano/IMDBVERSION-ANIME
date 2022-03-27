import { combineReducers } from 'redux';

import { animeReducer } from './animeReducer';
import { favReducer } from './favReducer';
export const rootReducer = combineReducers({
animeStreaming: animeReducer,
listaDeFavoritors: favReducer,
});