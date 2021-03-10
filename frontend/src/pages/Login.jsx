import React from 'react';
import { useHistory } from 'react-router-dom';

function Login() {
  // useHistory é uma função do react-router-dom que me permite acessar as rotas diretamente
  const history = useHistory()
  
  return (
    <div>
      <h1>Página login</h1>
      <form action="" >
        <fieldset>
          <label>Email:
            <input type="text" />
          </label>
        </fieldset>
        <fieldset>
          <label>Senha:
            <input type="password" />
          </label>
        </fieldset>
        <button onClick={() => history.push('/home')}>Login</button>
        <button onClick={() => history.push('/register')}>Register</button>
      </form>
    </div>
  )
}

export default Login;
