import React from 'react';
import '../Input/Input.scss';

{/* input buscador de pokemon */ }
<div className="input">
    <div className="demo-flex-spacer"></div>
    <div className="webflow-style-input">
        <input className="input" type="email" placeholder="ingresa pokemon"></input>
        <button type="" onClick={() => getPokemon("onix")}> buscar<i className="icon ion-android-arrow-forward"></i></button>
    </div>
</div>
