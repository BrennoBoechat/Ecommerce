import React, { FormEvent, useEffect, useState } from 'react'
import { LoginContainer } from './styles'
import { useRouter } from 'next/navigation'
import { api } from '@/services/api';
import Link from 'next/link';

interface Login {
  username: string,
  password: string,
}

function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const router = useRouter()

  const onSubmitLogin = (event : FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const body = {
      username: username,
      password: password
    }
    fetchLogin(body)
  }

  const fetchLogin = async(body : Login) => {
    try {
      const response = await api.post("auth/login", body)
      localStorage.setItem('token', response.data.token)
      router.push("/")
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const tokenStorage = localStorage.getItem("token");
    tokenStorage === null
      ? console.log("Token is null")
      : router.push("/")
  }, []);

  return (
    <LoginContainer>
      <div className='wrap'>
        <h2>bem-vindo(a)s</h2>
        <form onSubmit={onSubmitLogin}>
          <div className='inputs'>
            <input type='username' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Usuário'/>
            <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Senha'/>
          </div>

          <div className='buttons'>
            <button type='submit'>ENTRAR</button>
            <Link href="/register"><button className='register'>CRIAR CONTA</button></Link>
          </div>
        </form>
      </div>
    </LoginContainer>
  )
}

export default Login