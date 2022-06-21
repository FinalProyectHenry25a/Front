import React from 'react'

const Card = (name,imagen,precio)=>{
    return(
        <div className="card">
            <h3 className="name">{name}</h3>
            <img className="imagen" src={imagen} alt={name}> </img>
            <h4 className="precio">{precio}</h4>
            <button type="submit">Agregar al carrito</button>
        </div>
    )

}
export default Card