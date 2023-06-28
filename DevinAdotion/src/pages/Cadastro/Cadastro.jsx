import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cadastro.css';
import telacadastro from '../../assets/telacadastro.jpg';
import logo from '../../assets/logo.png';

const Cadastro = () => {
  const navigate = useNavigate();
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleVoltar = () => {
    navigate('/login');
  };

  const handleCadastro = () => {
    const data = {
      nome: nome,
      email: email,
      senha: senha
    };

      fetch('http://localhost:3333/cadastro', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(result => {
        console.log('Cadastro realizado com sucesso, faça o seu login!', result);

        navigate('/login');
      })
      .catch(error => {
        console.error('Erro no cadastro:', error);

        alert('Erro ao cadastrar. Por favor, tente novamente.');
      });
  };

  return (
    <div className="cadastro-container">
      <div className="image-container2">
        <img src={telacadastro} alt="Foto" />
      </div>
      <div className="form-cadastro">
        <img src={logo} alt="Logo" className="logo" />
        <h2 className="cadastroh2">Cadastre-se:</h2>
        <input
          type="text"
          placeholder="Insira seu Nome"
          value={nome}
          onChange={event => setNome(event.target.value)}
        />
        <input
          type="text"
          placeholder="Insira seu E-mail"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
        <input
          type="password"
          placeholder="Insira sua Senha"
          value={senha}
          onChange={event => setSenha(event.target.value)}
        />
        <button className="botao-cadastro" onClick={handleCadastro}>
          Cadastrar
        </button>
        <button className="botao-voltar" onClick={handleVoltar}>
          Voltar
        </button>
      </div>
    </div>
  );
};

export default Cadastro;
