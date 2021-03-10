import React from 'react';
import { useHistory } from 'react-router-dom';
import useInput from '../hooks/useInput';

function Login() {
  // useHistory é uma função do react-router-dom que me permite acessar as rotas diretamente
  const history = useHistory();
  const [email, setEmail] = useInput('');
  const [password, setPassword] = useInput('');

  const emailIsValid = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+$/.test(email);
  const passwordIsValid =  password && typeof password === 'string' && password.length > 5;

  return (
    <div>
      <h1>Página login</h1>
      <form action="" >
        <fieldset>
          <label>Email:
            <input value={email} onChange={setEmail} type="text" />
          </label>
        </fieldset>
        <fieldset>
          <label>Senha:
            <input value={password} onChange={setPassword} type="password" />
          </label>
        </fieldset>
        <button disabled={!(emailIsValid && passwordIsValid)} onClick={() => {
            localStorage.setItem('user', JSON.stringify({email, password}))
            history.push('/home')
        }}>Login</button>
        <button onClick={() => {history.push('/register')}}>Register</button>
      </form>
    </div>
  )
}

export default Login;
