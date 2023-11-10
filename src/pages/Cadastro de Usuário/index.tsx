import "./style.css"

import imgIconUser33 from "../../assets/Imagens/icon User.png"
import imgGroupMessage from "../../assets/Imagens/Group Message.png"
import imgLock from "../../assets/Imagens/Lock.png"
import imglogo from "../../assets/Imagens/logo.png"
import imgfaceBranco from "../../assets/Imagens/faceBranco.svg"
import imgInstaBranco from "../../assets/Imagens/InstaBranco.svg"
import imgtwitterBranco from "../../assets/Imagens/twitterBranco.svg"
import imgWhatsBranco from "../../assets/Imagens/WhatsBranco.svg"
import imgbanner from "../../assets/Imagens/cineminha.png"

function CadastroUsuario() {
  return (
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
              <h1>Usuario</h1>
              <div className="input">
                {<img
                  className="form-label"
                  src={imgIconUser33}
                />}
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
                  <label htmlFor="senha_cad">Sua senha</label>
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
                  <label htmlFor="user">Usuario</label>
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
  );
}

export default CadastroUsuario;