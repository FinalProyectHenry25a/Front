import React from "react";
import Card from '../card/Card'

const Home = () => {
    return(
        <div>
            <h1>HOME</h1>
                <Card
                  name="manu"
                  imagenes="https://www.perozzi.com.ar/26393-large_default/alcatel-telefono-celular-1-re-look-5033a-fltlara-00907234.jpg"
                  precio="300"
                />
        </div>
    )
}

export default Home;