import "./style.css"

import imgCinemaFooter from "../../assets/cinema_foto_pexels 1 (1).png"
import imgLogoBranco from "../../assets/logo-branco.svg"

function Footer() {
    return (
        <>
            <footer id="footer">
                <img
                    className="img-footer"
                    src={imgCinemaFooter}
                    alt=""
                />
                <ul>
                    <a href="../Home/home.html">Home</a>
                    <a href="../Login/login.html">Login</a>
                    <a href="">Pesquisar</a>
                    <a href="../calendario/calendario.html">Calendario</a>
                    <a href="../Favoritos/favoritos.html">Favoritos</a>
                    <a href="../filmesinformacoes/filmes.html">Informações</a>
                </ul>
                <div>
                    <div>
                        <img className="img-copy" src={imgLogoBranco} alt="" />
                        <span>Blámovi</span>
                        <p>© 2023 by blamovi.com, Inc.</p>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer