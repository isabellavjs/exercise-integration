import React from 'react';
import { useHistory } from 'react-router-dom';

function Register() {
  const history = useHistory()
  return (
    <div>
      <h1>Página registro</h1>
      <form action="" >
      <fieldset>
          <label>Nome:
            <input type="text" />
          </label>
        </fieldset>
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
        <button onClick={() => history.push('/home')}>Confirmar</button>
        <button onClick={() => history.push('/')}>Cancelar</button>
      </form>
    </div>
  )
}

export default Register;
