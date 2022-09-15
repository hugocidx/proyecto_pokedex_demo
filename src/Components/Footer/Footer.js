import React, { Component } from "react";
import './Footer.css';
//importar imagen
import imgPokemon from '../../Assets/img/logoPokemon.png';
import iconLinkln from '../../Assets/icon/iconLinkedin.svg'
import iconWhatsapp from '../../Assets/icon/iconWhatsapp.svg'
import iconYoutube from '../../Assets/icon/iconYoutube.svg'

class Footer extends Component {
    render() {
        return (
            <div className="footer" >
                <img className="logoPokemon" style={{ width: 400, height: 200 }} src={imgPokemon} alt='imagenPokemon' />
                <p>
                    En este sitio web podras encontrar informacion sobre tus pokemones favoritos
                </p>

                <div className="icons">
                    <a href="https://www.linkedin.com/in/hugo-cid-6442311a3/" target="_blank" >
                        <button className="icon1" >
                            <img src={iconLinkln} alt="iconLinkln" />
                        </button> </a>

                    <a href="https://wa.me/56967337274" target="_blank" >
                        <button className="icon2" type="none" >
                            <img src={iconWhatsapp} alt="iconWhatsapp" />
                        </button> </a>

                    <a href="https://www.youtube.com/channel/UCp6YQGlRtUGKGJPxX-en6mw" target="_blank" >
                        <button className="icon3" type="none" >
                            <img src={iconYoutube} alt="iconYoutube" />
                        </button> </a>
                </div>
            </div>
        );
    }
}

export default Footer;