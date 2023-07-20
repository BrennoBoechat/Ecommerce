import React, { useState } from 'react'
import { LoginContainer } from './styles'

function Login() {

  interface Onchange {
    target: {
      value: string;
    }
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(email)
  console.log(password)

  const changeEmail = (event : Onchange) => {
    setEmail(event.target.value);
  };

  const changePassword = (event : Onchange) => {
    setPassword(event.target.value);
  };

  return (

    <LoginContainer>
        <div className='wrap'>
        <h2>bem-vindo(a)s</h2>
          <div className='inputs'>
              <input type='email' value={email} onChange={changeEmail} placeholder='E-mail'></input>
              <input type='password' value={password} onChange={changePassword} placeholder='Senha'></input>
          </div>
          <div className='buttons'>
              <button>ENTRAR</button>
              <button className='register'>CRIAR CONTA</button>
          </div>
        </div>
    </LoginContainer>
  )
}

export default Login