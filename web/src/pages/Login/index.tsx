import React from 'react';
import { Link } from 'react-router-dom';

import Input from '../../components/Input';
import LogoComponent from '../../components/LogoComponent';
import Register from '../Register';

import heartIcon from '../../assets/images/icons/purple-heart.svg';

import './styles.css';

function Login() {
  return (
    <div id="page-login">
      <div id="page-login-content" className="container">
        <LogoComponent />
        <div className="page-login-main">
          <main>
            <div className="title">
              <h1>Fazer login</h1>
            </div>
            <fieldset>
              <Input
                name="email"
                label=""
                type="email"
                placeholder="E-mail"
              />
              <Input
                name="password"
                label=""
                type="password"
                placeholder="Senha"
              />
            </fieldset>
            <div className="remember-container">
              <input type="checkbox" name="rememberCheck" id="rememberCheck"/>
              <label>Lembrar-me</label>
              <a href="">Esqueci minha senha</a>
            </div>
            <button type="button">Entrar</button>
          </main>
          <footer>
            <div>
              <p>Não tem uma conta?</p>
              <Link to="/register">Cadastre-se</Link>
            </div>
            <span>É de graça <img src={heartIcon} alt="heart icon" /></span>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default Login;
