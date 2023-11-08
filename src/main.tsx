import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

//components
import Header from './components/Header'
import Footer from './components/Footer'
import Carrossel from './components/Carrossel'
import Modal from './components/Modal'
import Card from './components/Card'
import Formulario from './components/Cadastro'
import Post from './components/post'

//estilização global
import "./index.css";

//rotas
import { BrowserRouter, Routes, Route } from "react-router-dom";

//
import secureLocalStorage from 'react-secure-storage';
import Calendario from './pages/Calendario'
import Feed from './pages/Feed'
import Home from './pages/Home'
import PerfilUsuario from './pages/PerfilUsuario'

/*FUNÇÃO LOGADO*/
function logado() {
  if (secureLocalStorage.getItem("user")) {
    const objetoUsuario: any = secureLocalStorage.getItem("user");

    const nome: string = objetoUsuario.user.nome.trim().split(" ")[0];

    return { logado: true, nomeUsuario: nome }
  }
  else {
    return { logado: false, nomeUsuario: null }
  }
}
/* FIM FUNÇÃO LOGADO*/

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter> {/*Indica que aplicação terá rotas*/}
      <Header usuario={logado()} />
      <Routes>{/*Indica uma lista de rotas*/}
        <Route path='/' element={<Home />} /> {/*Indica o caminho do componente e o nome da rota dele*/}
       

        {/* Rota com parametro, indicando o identificador do desenvolvedor */}
        <Route path='perfil/:idUsuario' element={<PerfilUsuario />} />
        <Route path='visualizar/servico/:idServico' element={<Favoritos />} />
        <Route path='perfil/:idAdministrador' element={<PerfilAdministrador />} />
        <Route path='cadastro/usuario' element={<CadastroUsuario />} />
        <Route path='cadastro/administrador' element={<CadastroAdministrador />} />
        <Route path='login' element={<Login />} />
        <Route path='editar-perfil' element={<EditarPerfil/>} />
        <Route path='calendario' element={<Calendario/>} />
        <Route path='feed' element={<Feed/>} />
        <Route path='home' element={<Home />} />
        <Route path='filmes-informacoes' element={<FilmesInformacoes />} />
        <Route path='recuperacaosenha' element={<RecuperacaoSenha />} />
        <Route path='Contato' element={<Contato/>} />
        <Route path='alterar-senha' element={<AlterarSenha />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
)