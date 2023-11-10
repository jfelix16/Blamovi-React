import "./style.css"

import imgHome from "../../assets/Home.svg"

import imgIconUser33 from "../../assets/images/IconUser33.png"
import imgGroupMessage from "../../assets/images/Group Message.png"
import imgLock from "../../assets/images/Lock.png"
import imglogo from "../../assets/images/logo.png"
import imgfaceBranco from "../../assets/images/faceBranco.svg"
import imgInstaBranco from "../../assets/images/InstaBranco.svg"
import imgtwitterBranco from "../../assets/images/twitterBranco.svg"
import imgWhatsBranco from "../../assets/images/WhatsBranco.svg"
import imgbanner from "../../assets/images/cineminha.png"



function Cadastro() {
  return (
    <>
      <main className="banner" id="main_cadastro" >

        <div className="cineminhacorpo">
          {/* <img className="cineminha" src={imgbanner}  /> */}
        </div>
        {/* <div className="bannercineminha">
       
        </div> */}

        <div className="container">



          <a className="links" id="paracadastro" />
          <a className="links" id="paralogin" />
          <div className="content">
            <div id="cadastro">
              <form className="ajustes " method="post" action="">
                <h1>Cadastro</h1>
                <div className="input">
                  { <img
                    className="form-label"
                    src={imgIconUser33}
                  /> }
                  <div className="input-nome">
                    <label htmlFor="nome_cad">Seu Nome</label>
                    <input
                      id="nome_cad"
                      name="nome_cad"
                      required={true}
                      type="text"
                    />
                  </div>
                </div>
                <div className="input">
                  {/* <img
                    className="form-label"
                    src={imgGroupMessage}
                  /> */}
                  <div className="input-email">
                    <label htmlFor="email_cad">Seu e-mail</label>
                    <input
                      id="email_cad"
                      name="email_cad"
                      required={true}
                      type="email"
                    />
                  </div>
                </div>
                <div className="input">
                  <img className="form-label" src={imgLock} />
                  <div className="input-senha">
                    <label htmlFor="senha_cad">Senha</label>
                    <input
                      id="senha_cad"
                      name="senha_cad"
                      required={true}
                      type="password"
                    />
                  </div>
                </div>
                <div className="input">
                  <img className="form-label" src={imgLock} />
                  <div className="input-conf-senha">
                    <label htmlFor="confirma-senha">Confirmar Senha</label>
                    <input
                      id="confirma-senha"
                      name="confirma-senha"
                      required={true}
                      type="password"
                    />
                  </div>
                </div>
                <div className="input">
                  {/* <img
                    className="form-label"
                    src={imgIconUser33}
                  /> */}
                  <div className="input-user">
                    <label htmlFor="user">Cadastro</label>
                    <input id="user" name="user" required={true} type="text" />
                  </div>
                </div>
                <div className="input">
                  {/* <img
                    className="form-label"
                    src={imgIconUser33}
                  /> */}
                  <div className="input-foto">
                    <label htmlFor="foto">Foto</label>
                    <input id="foto" name="foto" required={true} type="file" />
                  </div>
                </div>
                <div className="input-submit">
                  <input type="submit" value="Cadastrar" />
                </div>

                {/* <hr class="linha"> */}
                <div className="alinhamento">
                  <p className="link">

                    <a href="#paralogin">
                      Login
                    </a>
                  </p>
                </div>
              </form>
              <div className="contato">
                <div className="imagem">
                  <img src={imglogo} />
                  {/* <a href="contato@blamovi.com">contato@blamovi.com</a> */}
                  <img src={imgfaceBranco} alt="" />
                  <img src={imgInstaBranco} alt="" />
                  <img
                    src={imgtwitterBranco}
                    alt=""
                  />
                  <img src={imgWhatsBranco} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="ajustesrodape" >

        <div>

          <ul>
            <li><a href="#" title="Home">Favoritos</a></li>
            <li><a href="#" title="login">Home</a></li>
            <li><a href="#" title="pesquisar">Pesquisar</a></li>
            <li><a href="#" title="login">Login</a></li>
            <li><a href="#" title="noticias">Noticias</a></li>
            <li><a href="#" title="informações">Informações</a></li>
            <li><a href="#" title="Fale Conosco">Fale Conosco</a></li>

          </ul>

        </div>

      </footer>

    </>
  )
}

export default Cadastro