import React, { FormEvent, useEffect, useState } from 'react'
import { RegisterContainer } from './styles'
import { api } from '@/services/api';
import { useRouter } from 'next/navigation';

interface Register {
    email: string;
    username: string;
    password: string;
    name: {
        firstname: string;
        lastname: string;
    };
    address: {
        city: string;
        street: string;
        number: number;
        zipcode: string;
        geolocation: {
            lat: string;
            long: string;
        };
    };
    phone: string;
}

function Register() {

    const [email, setEmail] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [lastname, setLastname] = useState<string>("");
    const [telephone, setTelephone] = useState<string>("");

    const MockedAddress = [{
        city: 'kilcoole',
        street: '7835 new road',
        number: 3,
        zipcode: '12926-3874',
        geolocation: {
            lat: '-37.3159',
            long: '81.1496'
        }
    }
    ]

    const router = useRouter()

    const onSubmitRegister = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const body = {
            email: email,
            username: username,
            password: password,
            name: {
                firstname: name,
                lastname: lastname
            },
            address: {
                city: MockedAddress[0].city,
                street: MockedAddress[0].street,
                number: MockedAddress[0].number,
                zipcode: MockedAddress[0].zipcode,
                geolocation: {
                    lat: MockedAddress[0].geolocation.lat,
                    long: MockedAddress[0].geolocation.long
                }
            },
            phone: telephone
        }
        fetchRegister(body)
    }


    const fetchRegister = async (body: Register) => {
        try {
            const response = await api.post("/users", body);
            localStorage.setItem('token', response.data.id);
            router.push("/");
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        const tokenStorage = localStorage.getItem("token");
        tokenStorage === null
            ? console.log("Token is null")
            : router.push("/")
    }, []);


    return (
        <RegisterContainer>
            <form onSubmit={onSubmitRegister}>
                <div className='wrap'>
                    {/* <h2>Dados Pessoais</h2> */}
                    <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='E-mail' />
                    <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Username' />
                    <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Senha' />
                    <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Nome' />
                    <input type='text' value={lastname} onChange={(e) => setLastname(e.target.value)} placeholder='Sobrenome' />
                    <input type='tel' value={telephone} onChange={(e) => setTelephone(e.target.value)} placeholder='Telefone' />
                    <button type='submit'>Confirmar</button>
                </div>
            </form>
        </RegisterContainer>
    )
}

export default Register