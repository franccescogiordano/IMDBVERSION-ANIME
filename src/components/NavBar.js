
import { VentanaDeBusqueda} from "./VentanaDeBusqueda";
import { useBuscador } from "./useBuscador";
import React, { Component }  from 'react';
export const NavBar = () => {
    const { animeName,handleInputChange,showSearchDiv,onMouseEnterSearch,
        onMouseLeaveSearch,} = useBuscador();
    return (
        <div
        className="search-toggle">
		    <input
                onFocus={onMouseEnterSearch}
                onBlur={onMouseLeaveSearch}

            type="text"
            placeholder="Buscar un anime"
            name="animeName"
            onChange={handleInputChange}
            value={animeName}
            autoComplete="off"
            />
              {
                (showSearchDiv && animeName.length > 3 ) && <VentanaDeBusqueda/>
            }
		   </div>
    )
}