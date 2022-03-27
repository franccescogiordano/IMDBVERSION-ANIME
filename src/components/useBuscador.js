import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { animeActions } from "../actions/anime";
import { useForm } from "./useForm";

export const useBuscador = () => {

    const dispatch = useDispatch();

    const { actGetbuscarAnimeByName } = animeActions();

    const { buscarAnime } = useSelector(state => state.animeStreaming);

    const [formValues, handleInputChange] = useForm({ animeName: '' });

    const { animeName } = formValues;

    useEffect(() => {
        dispatch(actGetbuscarAnimeByName(animeName));

    }, [actGetbuscarAnimeByName, animeName, dispatch]);

    const [showSearchDiv, setShowSearchDiv] = useState(false);

    const onMouseEnterSearch = () => {
        setShowSearchDiv(true);
    };

    const onMouseLeaveSearch = () => {
        setShowSearchDiv(false);
    };

    const searchContainer = useRef(null);

    return {
        animeName,
        handleInputChange,

        buscarAnime,

        searchContainer,
        showSearchDiv,
        onMouseEnterSearch,
        onMouseLeaveSearch,
    }
}
