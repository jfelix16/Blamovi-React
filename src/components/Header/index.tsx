import "./style.css"

import imgLogoBranco from "../../assets/logo-branco.svg"

function Header() {
    return (
        <>
            <header id="header">
                <div className="posicionamento_header posicionamento">
                    <div className="logo">
                        <img src={imgLogoBranco} alt="logo" />
                        <span>Blámovi</span>
                    </div>
                    <div id="divBusca">
                        <input type="text" id="txtBusca" placeholder="..." />
                        <button id="btnBusca">Buscar</button>
                    </div>
                    <a
                        id="menu_barras"
                        aria-label="abrir menu"
                        aria-controls="menu_links"
                        aria-expanded="false"
                        aria-haspopup="true"
                        className="menu_barras"
                        href="#"
                        // onclick="mostrarMenu()"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                        </svg>
                    </a>
                    <nav id="menu_links">
                        <a href="../Home/home.html" style={{ animationDelay: "0.2s" }}>
                            Home
                        </a>
                        <a href="../Favoritos/favoritos.html">Favoritos</a>
                        <a href="../Cadastro/cadastro.html">Cadastro</a>
                        <a href="../Login/login.html">Login</a>
                    </nav>
                </div>
            </header>

        </>
    )
}

export default Header