import "./style.css"
//estilização

import Cadastro from "../../components/Cadastro";


//Hook
import { useState } from "react";

//axios
import api from "../../utils/api";

function CadastroUsuario() {

    //state techs com as tecnologias definidas
    //const [techs, setTechs] = useState<string[]>(
       // [
           // "HTML",
           // "CSS",
           // "JAVASCRIPT"
       // ]
   // );

    //const [skillsSelecionadas, setSkillsSelecionadas] = useState<string[]>([]); // Array (lista) para armazenar as skills selecionadas

   // const [select, setSelect] = useState<string>(""); // state que contém a opção de skill selecionada pelo usuário

    const [nome, setNome] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [senha, setSenha] = useState<string>("");
    const [usuario, setusuario] = useState<string>("");
    //const [cep, setCep] = useState<string>("");
    const [foto, setFoto] = useState<any>(); //valor inicial undefined
    //const [logradouro, setLogradouro] = useState<string>("");
    //const [numero, setNumero] = useState<string>("");
    //const [bairro, setBairro] = useState<string>("");
    //const [cidade, setCidade] = useState<string>("");
    //const [uf, setUf] = useState<string>("");


    function cadastrarUsuario(event: any) {
        event.preventDefault();

        //só utiliza formData quando tiver arquivos 
        const formData = new FormData();


        //A chave da função do append() precisa ser o mesmo nome do atributo que api retorna
        formData.append("nome", nome);
        formData.append("email", email);
        formData.append("password", senha);
        formData.append("password", senha);
        formData.append("user_img", foto);
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

    function Formulario() {
        const [formData, setFormData] = useState({
          nome: '',
          email: '',
          senha: '',
          confirmarSenha: '',
          usuario: '',
        });
      
        const [erros, setErros] = useState({
          nome: false,
          email: false,
          senha: false,
          confirmarSenha: false,
          usuario: false,
        });
      
        const handleInputChange = (e) => {
          const { name, value } = e.target;
          setFormData({
            ...formData,
            [name]: value,
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
                <label>Nome:</label>
                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleInputChange}
                  className={erros.nome ? 'error' : ''}
                />
                {erros.nome && <p className="error-message">Campo não preenchido</p>}
              </div>
              <div>
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={erros.email ? 'error' : ''}
                />
                {erros.email && <p className="error-message">Campo não preenchido</p>}
              </div>
              <div>
                <label>Senha:</label>
                <input
                  type="password"
                  name="senha"
                  value={formData.senha}
                  onChange={handleInputChange}
                  className={erros.senha ? 'error' : ''}
                />
                {erros.senha && <p className="error-message">Campo não preenchido</p>}
              </div>
              <div>
                <label>Confirmar Senha:</label>
                <input
                  type="password"
                  name="confirmarSenha"
                  value={formData.confirmarSenha}
                  onChange={handleInputChange}
                  className={erros.confirmarSenha ? 'error' : ''}
                />
                {erros.confirmarSenha && <p className="error-message">Campo não preenchido</p>}
              </div>
              <div>
                <label>Usuário:</label>
                <input
                  type="text"
                  name="usuario"
                  value={formData.usuario}
                  onChange={handleInputChange}
                  className={erros.usuario ? 'error' : ''}
                />
                {erros.usuario && <p className="error-message">Campo não preenchido</p>}
              </div>
              <button type="submit">Cadastrar</button>
            </form>
          </div>
        );
      }
      
      export default Formulario;

function CadastroUsuario() { 
    return(
        <>
        return (
        <main className="cadastro">
            <div className="container container_cad">
                <div className="cad_conteudo">
                    <h1>Cadastro</h1>
                    <hr />
                    <form className="cad_formulario" method="POST" onSubmit={cadastrarUsuario}>
                        <div className="cad_box_input">
                            <label htmlFor="nome">Nome Completo:</label>
                            <input
                                type="text"
                                id="nome"
                                placeholder="Digite aqui seu nome:"
                                onChange={(e) => setNome(e.target.value)}
                                required
                            />
                        </div>
                        <div className="cad_box_input">
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
                        <div className="cad_box_input">
                            <label htmlFor="senha">Senha:</label>
                            <input
                                type="password"
                                id="senha"
                                placeholder="Digite aqui sua senha:"
                                onChange={(e) => setSenha(e.target.value)}
                                required
                            />
                        </div>
                        <div className="cad_box_input">
                            <label htmlFor="foto">Foto:</label>
                            {/* Passar primeiro como exemplo */}
                            <input
                                type="file"
                                id="foto"
                                onChange={verificarCampoUpload}
                                required
                            />
                        </div>

                        <div className="cad_box_input">
                            <label htmlFor="usuario">Usuario:</label>
                            {/* Passar primeiro como exemplo */}
                            <input
                                type="file"
                                id="usuario"
                                onChange={verificarCampoUpload}
                                required
                            />
                        </div>

                        {/* <span>Endereço:</span>
                        <hr /> */}

                        {/* <div className="cad_box_input">
                            <label htmlFor="cep">Cep:</label>
                            <input
                                type="text"
                                id="cep"
                                maxLength={9}
                                onKeyUp={mascaraCep}
                                placeholder="Digite aqui seu Cep:"
                                onChange={(e) => setCep(e.target.value)}
                                required
                            />
                        </div> */}

                        {/* <div className="cad_box_input">
                            <label htmlFor="logradouro">Logradouro:</label>
                            <input
                                type="text"
                                id="logradouro"
                                placeholder="Digite aqui seu Logradouro:"
                                onChange={(e) => setLogradouro(e.target.value)}
                                required
                            />
                        </div> */}

                        {/* <div className="cad_linha1_input">
                            <div className="cad_box_input2">
                                <label htmlFor="numero">Numero:</label>
                                <input
                                    type="text"
                                    id="numero"
                                    placeholder="Digite o Nº:"
                                    onChange={(e) => setNumero(e.target.value)}
                                    required
                                />
                            </div> */}

                            {/* <div className="cad_box_input2">
                                <label htmlFor="bairro">Bairro:</label>
                                <input
                                    type="text"
                                    id="bairro"
                                    placeholder="Digite aqui seu Bairro:"
                                    onChange={(e) => setBairro(e.target.value)}
                                    required
                                />
                            </div> */}
                        </div>

                        {/* <div className="cad_linha2_input">
                            <div className="cad_box_input2">
                                <label htmlFor="cidade">Cidade:</label>
                                <input
                                    type="text"
                                    id="cidade"
                                    placeholder="Digite aqui sua Cidade:"
                                    onChange={(e) => setCidade(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="cad_box_input2">
                                <label className="cad_uf" htmlFor="uf">UF:</label>
                                <input
                                    type="text"
                                    id="uf"
                                    maxLength={2}
                                    placeholder="Digite a UF:"
                                    onChange={(e) => setUf(e.target.value)}
                                    required
                                />
                            </div>
                        </div> */}

                        {/* <div className="cad_linha_checkbox">
                            <span>Cliente</span>
                            <div className="cad_container_checkbox">
                                <input
                                    className="cad_checkbox"
                                    type="checkbox"
                                    name="checkbox"
                                    id="checkbox"
                                />
                                <label className="cad_label" htmlFor="checkbox"></label>
                                <div className="cad_box_checkbox"></div>
                                <div className="cad_hard_skill">
                                    <span>Hard Skills</span>
                                    <hr />
                                    <div className="cad_box_skills">
                                        <span>Selecione uma Skill para adicionar</span>
                                        <div className="cad_linha_select">
                                            <select
                                                name=""
                                                id="cad_select_skill"
                                                onChange={(e) => setSelect(e.target.value)}
                                                defaultValue={select}
                                            >
                                                <option disabled value="">Selecione</option>
                                                {
                                                    techs.map((tech: any, index: number) => {
                                                        return <option key={index} value={tech}>{tech}</option>
                                                    })
                                                }
                                            </select>
                                            <button
                                                type="button"
                                                id="cad_btn_inserir"
                                                onClick={adicionarSkill}>
                                                Inserir
                                            </button>
                                        </div>
                                        <div id="cad_lista_skills">
                                            {
                                                skillsSelecionadas.length > 0 ? skillsSelecionadas.map((el: any, index: number) => {
                                                    return <div key={index} className="cad_item_skill">
                                                        <span className="cad_span_skill">{el}</span>
                                                        <button
                                                            type="button"
                                                            id="cad_item_excluir"
                                                            onClick={() => excluirSkill(el)}
                                                            className="cad_item_excluir">
                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                height="1em"
                                                                viewBox="0 0 384 512">
                                                                <path
                                                                    d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                }) : <span className="cad_span_skill">Nenhuma skill cadastrada</span>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <span>Desenvolvedor</span>
                        </div> */}
                        <button type="submit" className="cad_botao">Cadastrar</button>
                    </form>
                </div>
            </div>
        </main>
    );
}

export default CadastroUsuario;




        </>
    )
}

export default Cadastro