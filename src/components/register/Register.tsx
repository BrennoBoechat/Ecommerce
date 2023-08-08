import React, { useState } from 'react'
import { RegisterContainer } from './styles'
import { api } from '@/services/api';
import { useRouter } from 'next/navigation';

interface Register {

}

function Register() {

    const [email, setEmail] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [lastname, setLastname] = useState<string>("");
    const [telephone, setTelephone] = useState<string>("");

    const [city, setCity] = useState<string>("");
    const [street, setStreet] = useState<string>("");
    const [number, setNumber] = useState<string>("");
    const [cpf, setCpf] = useState<string>("");
    const [lat, setLat] = useState<string>("");
    const [long, setLong] = useState<string>("");

    const router = useRouter()

    const fetchRegister = async(body : Register) => {
        try {
            const response = await api.post("/users", body)
            localStorage.setItem('token', response.data.token)
            router.push("/")
        } catch (error) {
            console.log(error)
        }
    }



    return (
    <RegisterContainer>
        <div className='wrap'>
            <div className='person'>
                <h2>Dados Pessoais</h2>
                    <input type='email' placeholder='E-mail'/>
                    <input type='text' placeholder='Username'/>
                    <input type='password' placeholder='Senha'/>
                    <input type='text' placeholder='Nome'/>
                    <input type='text' placeholder='Sobrenome'/>
                    <input type='tel' placeholder='Telefone'/>
            </div>
            <div className='address'>
                <h2>Endereço</h2>
                    <input type='text' placeholder='Cidade'/>
                    <input type='text' placeholder='Rua'/>
                    <input type='number' placeholder='Número'/>
                    <input type='number' placeholder='CPF'/>
                    <input type='number' placeholder='Latitude'/>
                    <input type='number' placeholder='Longitude'/>
            </div>
            <button>Confirmar</button>
        </div>
    </RegisterContainer>
    )
}

export default Register