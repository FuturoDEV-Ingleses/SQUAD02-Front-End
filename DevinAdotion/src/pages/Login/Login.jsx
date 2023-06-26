import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import telalogin from '../../assets/telalogin.png';
import './Login.css';
import logo from '../../assets/logo.png';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  const handleLogin = () => {
    // Validar o e-mail e a senha aqui, por exemplo:
    if (email === 'usuario@example.com' && senha === 'senha123') {
      navigate('/dashboard');
    } else {
      setErro('E-mail e/ou Senha inválidos!');
    }
  };

  const handleFecharPopUp = () => {
    setErro('');
    window.location.reload();
  };

  return (
    <div className="login-container">
      <div className="image-container">
        <img src={telalogin} alt="Foto" />
      </div>
      <div className="form-container">
        <img src={logo} alt="Logo" className="logo" />
        <h2 className="bemvindo">Seja bem-vindo!</h2>
        <input
          type="text"
          placeholder="E-mail"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(event) => setSenha(event.target.value)}
        />
        <button className="botao-entrar" onClick={handleLogin}>
          Entrar
        </button>
        {erro && (
          <div className="error-popup">
            {erro}
            <button className="botao-ok" onClick={handleFecharPopUp}>
              OK
            </button>
          </div>
        )}
        <Link to="/cadastro" className="cadastro-link">
          Não possui cadastro? Clique aqui.
        </Link>
      </div>
    </div>
  );
};

export default Login;