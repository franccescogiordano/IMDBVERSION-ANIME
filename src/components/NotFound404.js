import { Link } from "react-router-dom"
import React, { Component }  from 'react';
export const NotFound404 = () => {
    return (
        <div className="img-notFound">
            <img src="https://testbuzz.in/static/media/IMG-20421.00469e5f.png" alt="EROR404"/>

            <div className="text-notFound">
                tu lista de preferidos esta vacia, te recomiendo agregar algunos  <Link to="/">Click aqui para volver al menu</Link>
            </div>
            </div>
    )
}