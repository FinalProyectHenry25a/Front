import React from 'react'
import style from './../card/Card.module.css'

export default function Card(props){
    console.log(props)
    return(
        <div className={style.card}>
            <h3>{props.name}</h3>
            <img src={props.imagenes} alt="out"/>
            <h4>{props.precio}</h4>
            <button type="submit">Agregar al carrito</button>
        </div>
    )
}