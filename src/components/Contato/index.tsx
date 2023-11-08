import "./style.css"
import imgfacebook from "C:\Users\user_acronus\Documents\Code\BlamoviReact-main\BlamoviReact-main\src\components\Formulario\imagens\redeSocial\faceBranco.svg"
import imgInstagram from "C:\Users\user_acronus\Documents\Code\BlamoviReact-main\BlamoviReact-main\src\components\Formulario\imagens\redeSocial\InstaBranco.svg"
import imgTwitter from "C:\Users\user_acronus\Documents\Code\BlamoviReact-main\BlamoviReact-main\src\components\Formulario\imagens\redeSocial\twitterBranco.svg"
import imgWhatsApp from "C:\Users\user_acronus\Documents\Code\BlamoviReact-main\BlamoviReact-main\src\components\Formulario\imagens\redeSocial\WhatsBranco.svg"
import imgBlamovi from "C:\Users\user_acronus\Documents\Code\BlamoviReact-main\BlamoviReact-main\src\components\Formulario\imagens\logo.png"
import imgLock from "C:\Users\user_acronus\Documents\Code\BlamoviReact-main\BlamoviReact-main\src\components\Formulario\imagens\Lock.png"
import imgIconUser from "C:\Users\user_acronus\Documents\Code\BlamoviReact-main\BlamoviReact-main\src\components\Formulario\imagens\icon User.png"
import bars-solid from "C:\Users\user_acronus\Documents\Code\BlamoviReact-main\BlamoviReact-main\src\components\Formulario\imagens\bars-solid.svg"
import groupMessage from "C:\Users\user_acronus\Documents\Code\BlamoviReact-main\BlamoviReact-main\src\components\Formulario\imagens\Group Message.png"



//rotas
import { Link } from "react-router-dom";

function Login() {

    const location = useLocation();

    return(
        <>
   <!--FORMULÁRIO DE CADASTRO-->

        <div id="login" className="login" {
            constructor(parameters) {
                
            }
        }>
          <form method="post" action="">
            <h1>Login</h1>

            <div className="input">
              <img className="form-label" src="../Cadastro/imagens/icon User.png"/>
              <div className="input-nome">
                <label for ="nome_cad">Seu Nome</label>
                <input id="nome_cad" name="nome_cad" required="required" type="text"/>
              </div>

            </div>

            <div className="input">
              <img className="form-label" src="../Cadastro/imagens/Group Message.png"/>
              <div className="input-email">
                <label for="email_cad">Seu e-mail</label>
                <input id="email_cad" name="email_cad" required="required" type="email" />
              </div>
            </div>

            <div className="input">
              <img className="form-label" src="../Cadastro/imagens/Lock.png"/>
              <div className="input-senha">
                <label for="senha_cad">Sua senha</label>
                <input id="senha_cad" name="senha_cad" required="required" type="password" />
              </div>
            </div>

            {/* <div className="input">
              <img className="form-label" src="../Cadastro/imagens/Lock.png"/>
              <div className="input-conf-senha">

                <label for="confirma-senha">Confirmar Senha</label>
                <input id="confirma-senha" name="confirma-senha" required="required" type="password" />
              </div>
            </div> */}

            {/* <div className="input">
              <img className="form-label" src="../Cadastro/imagens/icon User.png"/>
              <div className="input-user">
                <label for="user">Usuario</label>
                <input id="user" name="user" required="required" type="text"/>
              </div>

            </div> */}

            
            {/* <div className="input">
              <img className="form-label" src="../Cadastro/imagens/icon User.png"/>
              <div className="input-foto">
                <label for="foto">Foto</label>
                <input id="foto" name="foto" required="required" type="file"/>
              </div>

            </div> */}



            <div className="input-submit">
              <input type="submit" value="Cadastrar" />
            </div>


            <hr className="linha"/> 
            <div className="alinhamento">
              <p className="link2">Já tem conta?<a href="#paralogin"> <br>Cadastre-se agora! </br></a></p>
            </div>

            <div class="contato">

            <div class="imagem">
              <img src="../Cadastro/imagens/logo.png">
              <!--</img><a href="contato@blamovi.com">contato@blamovi.com</a> -->
              <img src="../Cadastro/imagens/redeSocial/faceBranco.svg" alt="">
              <img src="../Cadastro/imagens/redeSocial/InstaBranco.svg" alt="">
              <img src="../Cadastro/imagens/redeSocial/twitterBranco.svg" alt="">
              <img src="../Cadastro/imagens/redeSocial/WhatsBranco.svg" alt="">

            </div>
          </div>

          </form>

    );
}

        </>
    )
}

{/* export default Formulario

/* exemplo */
//estilização

// function Formulario(props: any) { */}


    // function verificarListaTechs() {
    //     if (typeof props.listaTechs === "string") {
    //         return JSON.parse(props.listaTechs);
    //     } else {
    //         return props.listaTechs;
    //     }
    // }

//     return (
     

// export default Formu;