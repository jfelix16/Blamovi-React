import "./style.css"


import "./style.css"
//estilização

import Cadastro from "../../components/Cadastro";


//Hook
import { useState } from "react";

//axios
import api from "../../utils/api";

    function login(event: any) {
        event.preventDefault();

        //só utiliza formData quando tiver arquivos 
        const formData = new FormData();


        //A chave da função do append() precisa ser o mesmo nome do atributo que api retorna
        // formData.append("nome", nome);
        formData.append("email", email);
        formData.append("password", senha);
        // formData.append("password", senha);
        // formData.append("user_img", foto);
        //formData.append("cep", cep);
       // formData.append("logradouro", logradouro);
       // formData.append("numero", numero);
      //  formData.append("bairro", bairro);
      //  formData.append("cidade", cidade);
      //  formData.append("uf", uf);
       // formData.append("hardSkills", JSON.stringify(skillsSelecionadas));


        //VALIDAÇÃO DE EMAIL
       function EmailValidation() { 
        const [email, setEmail] = useState('');
        const [isValidEmail, setIsValidEmail] = useState(true);
      
        const handleEmailChange = (e) => {
          const enteredEmail = e.target.value;
          setEmail(enteredEmail);
      
          // Expressão regular para verificar o formato do email
          const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/



          // Verifique se o email está no formato correto
    const isValid = emailRegex.test(enteredEmail);
    setIsValidEmail(isValid);
  };

  return (
    <div>
      <label>Email:</label>
      <input
        type="text"
        value={email}
        onChange={handleEmailChange}
        placeholder="Digite seu email"
      />
      {!isValidEmail && (
        <div style={{ color: 'red' }}>Email inválido. Por favor, insira um email válido.</div>
      )}
    </div>
  );
}

export default EmailValidation; 
// FIM VALIDAÇÃO DE E-MAIL

// VALIDAÇÃO DE SENHA//
function SenhaValidation() {
    const [senha, setSenha] = useState('');
    const [isValidSenha, setIsValidSenha] = useState(true);
  
    const handleSenhaChange = (e) => {
      const enteredSenha = e.target.value;
      setSenha(enteredSenha);
  
      // Expressão regular para verificar a senha
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/;
  
      // Verifique se a senha atende aos critérios
      const isValid = passwordRegex.test(enteredSenha);
      setIsValidSenha(isValid);
    };
  
    return (
      <div>
        <label>Senha:</label>
        <input
          type="senha"
          value={senha}
          onChange={handleSenhaChange}
          placeholder="Digite sua senha"
          style={{ borderColor: isValidSenha ? 'initial' : 'red' }}
        />
        {!isValidSenha && (
          <div style={{ color: 'red' }}>
            A senha deve conter pelo menos 8 caracteres, incluindo letras maiúsculas, letras minúsculas, números e caracteres especiais.
          </div>
        )}
      </div>
    );
  }
  
  export default PasswordValidation;
  //FIM VALIDAÇÃO DE SENHA

  //COMPARA SENHA COM CONFIRMAR SENHA//
  function confirmaSenha() {
    const [senha, setSenha] = useState('');
    const [confirmaSenha, setConfirmaSenha] = useState('');
    const [senhaMatch, setSenhaMatch] = useState(true);
  
    const handleSenhaChange = (e) => {
      const enteredSenha = e.target.value;
      setSenha(enteredSenha);
      checkSenhaMatch(enteredSenha, confirmaSenha);
    };
  
    const handleConfirmaSenhaChange = (e) => {
      const enteredConfirmaSenha = e.target.value;
      setConfirmaSenha(enteredConfirmaSenha);
        setConfirmaSenha(enteredConfirmaSenha);
    checkSenhaMatch(senha, enteredConfirmaSenha);
  };

  const checkSenhaMatch = (senha: any, confirmaSenha: any) => {
    if (senha === confirmaSenha) {
      setSenhaMatch(true);
    } else {
      setSenhaMatch(false);
    }
  };

  return (
    <div>
      <label>Senha:</label>
      <input
        type="password"
        value={senha}
        onChange={handleSenhaChange}
        placeholder="Digite sua senha"
      />

      <label>Confirmar Senha:</label>
      <input
        type="password"
        value={confirmaSenha}
        onChange={handleConfirmaSenhaChange}
        placeholder="Confirme sua senha"
        style={{ borderColor: senhaMatch ? 'initial' : 'red' }}
      />

      {! senhaMatch && (
        <div style={{ color: 'red' }}>
          As senhas não coincidem. Por favor, digite novamente.
        </div>
      )}
    </div>
  );
}

export default confirmaSenha;


  //FIM COMPARAR SENHA //

        api.post("users", formData)
            .then((response: any) => {
                console.log(response);
                alert("Usuário cadastrado com sucesso!");
            })
            .catch((error: any) => {
                console.log(error);
                alert("Falha ao cadastrar um novo usuário");
            })

    }

    function verificarCampoUpload(event: any) {
        console.log(event.target.files[0]);
        //atualiza o state foto com o valor do file
        setFoto(event.target.files[0]);
    }

    //Funçao para colocar mascara no input no Usuário
    function mascaraCep(event: any) {
        let valorDigitado = event.target.value; // Obtém o valor do elemento que acionou o evento, neste caso o valor digitado no input

        if (!valorDigitado) return ""; // Se o valor for vazio, retorna uma string vazia

        valorDigitado = valorDigitado.replace(/\D/g, ''); // Remove todos os caracteres não numéricos do valor (deixa apenas os dígitos)
        valorDigitado = valorDigitado.replace(/(\d{5})(\d)/, '$1-$2'); // Aplica a máscara de CEP (formato XXXXX-XXX) ao valor

        event.target.value = valorDigitado; // Atualiza o valor do input com o valor mascarado
    }

    // function adicionarSkill() {
    //     //verifica o valor do state select
    //     if (select === "") {
    //         //se for igual a string vazia, exibe uma mensagem
    //         alert("Selecione uma skill para adicionar");
    //     } else {
    //         //se não, verifica se no state skillsSelecionadas existe a skill que o usuario selecionou
    //         if (skillsSelecionadas.includes(select)) {
    //             //se existir, exibe uma mensagem
    //             alert("Essa skill já foi selecionada");
    //         }
    //         else {
    //             //se não existir, a variavel novaListaSkillsSelecionadas cria uma cópia do valor do state skillsSelecionadas
    //             let novaListaSkillsSelecionadas = [...skillsSelecionadas];

    //             //E adiciona a skill, que foi selecionada pelo usuário
    //             novaListaSkillsSelecionadas.push(select);

    //             //Atualiza o valor do state skillsSelecionadas
    //             setSkillsSelecionadas(novaListaSkillsSelecionadas);
    //         }
    //     }
    // }

    // function excluirSkill(skill: string) {

    //     //A variavel novaListaSkillsSelecionadas armazena skills diferente da skill que o usuário clicou para ser excluida.
    //     const novaListaSkillsSelecionadas = skillsSelecionadas.filter(item => item !== skill);

    //     //Atualiza o valor do state skillsSelecionadas, com o valor da variavel novaListaSkillsSelecionadas 
    //     setSkillsSelecionadas(novaListaSkillsSelecionadas);

    // };

    function Login() {
        const [formData, setFormData] = useState({
          // nome: '',
          email: '',
          senha: '',
          // confirmarSenha: '',
          // usuario: '',
        });
      
        const [erros, setErros] = useState({
          // nome: false,
          email: false,
          senha: false,
          // confirmarSenha: false,
          // usuario: false,
        });
      
        const handleInputChange = (e) => {
          const { email, value } = e.target;
          setFormData({
            ...formData,
            [email]: value,
          });
        };
      
        const handleSubmit = (e) => {
          e.preventDefault();
      
          // Verifique se os campos estão preenchidos
          const newErrors = {};
          for (const campo in formData) {
            if (formData:string[campo] === '') {
              newErrors: any [campo] = true;
            } else {
              newErrors: any[campo] = false;
            }
          }
          setErros(newErrors);
      
          // Verifique se as senhas coincidem
          if (formData.senha !== formData.confirmarSenha) {
            alert('As senhas não coincidem');
            return;
          }
      
          // Se todos os campos estiverem preenchidos e as senhas coincidirem, você pode prosseguir com o envio do formulário.
          // Aqui você pode adicionar a lógica para enviar os dados para o servidor ou fazer qualquer outra ação necessária.
        };
      
        return (
          <div>
            <form onSubmit={handleSubmit}>
              <div>
                <label>Email:</label>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  classNameEmail={erros.email ? 'error' : ''}
                />
                {erros.nome && <p classNameName="error-message">Campo não preenchido</p>}
              </div>
              <div>
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  classNameName={erros.email ? 'error' : ''}
                />
                {erros.email && <p classNameName="error-message">Campo não preenchido</p>}
              </div>
              <div>
                <label>Senha:</label>
                <input
                  type="password"
                  name="senha"
                  value={formData.senha}
                  onChange={handleInputChange}
                  classNameName={erros.senha ? 'error' : ''}
                />
                {erros.senha && <p classNameName="error-message">Campo não preenchido</p>}
              </div>
              <div>
                <label>Confirmar Senha:</label>
                <input
                  type="password"
                  name="confirmarSenha"
                  value={formData.confirmarSenha}
                  onChange={handleInputChange}
                  classNameName={erros.confirmarSenha ? 'error' : ''}
                />
                {erros.confirmarSenha && <p classNameName="error-message">Campo não preenchido</p>}
              </div>
              <div>
                <label>Usuário:</label>
                <input
                  type="text"
                  name="usuario"
                  value={formData.usuario}
                  onChange={handleInputChange}
                  classNameName={erros.usuario ? 'error' : ''}
                />
                {erros.usuario && <p classNameName="error-message">Campo não preenchido</p>}
              </div>
              <button type="submit">Cadastrar</button>
            </form>
          </div>
        );
      }
      
      export default Formulario;

function Login() { 
    return(
        <>
        return (
        <main classNameName="login">
            <div classNameName="container container_cad">
                <div classNameName="login_conteudo">
                    <h1>Cadastro</h1>
                    <hr />
                    {/* <form classNameName="login_formulario" method="POST" onSubmit={cadastrarUsuario}>
                        <div classNameName="login_box_input">
                            <label htmlFor="nome">Nome Completo:</label>
                            <input
                                type="text"
                                id="nome"
                                placeholder="Digite aqui seu nome:"
                                onChange={(e) => setNome(e.target.value)}
                                required
                            />
                        </div> */}

                        <div classNameName="login_box_input">
                            <label htmlFor="email">E-mail:</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Digite aqui seu e-mail:"
                                onChange={(e) => setEmail(e.target.value)}
                                onChange={EmailValidation}
                                required
                            />
                        </div>
                        <div classNameName="login_box_input">
                            <label htmlFor="senha">Senha:</label>
                            <input
                                type="password"
                                id="senha"
                                placeholder="Digite aqui sua senha:"
                                onChange={(e) => setSenha(e.target.value)}
                                required
                            />
                        </div>
                       

                        {/* <div classNameName="login_box_input">
                            <label htmlFor="usuario">Usuario:</label>
                            {/* Passar primeiro como exemplo */}
                            {/* <input
                                type="file"
                                id="usuario"
                                onChange={verificarCampoUpload}
                                required
                            />
                        </div> } */}


function Login() {
    return(
        <>
        <!--FORMULÁRIO DE login-->
        <div id="login">
          <form method="post" action="">
            <h1>Login</h1>

            

            <div className="input">
              <img className="form-label" src="../Cadastro/imagens/Group Message.png">
              <div className="input-email">
                <label for="email_cad">Seu e-mail</label>
                <input id="email_cad" name="email_cad" required="required" type="email" placeholder="E-mail ou Usuario" />
              </div>
            </div>

            <div className="input">
              <img className="form-label" src="../Cadastro/imagens/Lock.png">
              <div className="input-senha">
                <label for="senha_cad">Sua senha</label>
                <input id="senha_cad" name="senha_cad" required="required" type="password" />
              </div>
            </div>

           


            <div className="input-submit">
              <input type="submit" value="Cadastrar" />
            </div>


          <hr className="linha">
            <div className="alinhamento">
              <p className="link2">Já tem conta?<a href="#paralogin"> <br>Cadastre-se agora! </a></p>
            </div>

          </form>
        </>
    )
}

export default Login