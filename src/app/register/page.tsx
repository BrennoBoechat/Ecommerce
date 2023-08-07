'use client';
import React from 'react'
import { RegisterContainer } from './styles'

function register() {
  return (
    <RegisterContainer>
        <div className='wrap'>
            <h1>Registre-se</h1>
            <div className='person'>
                <h2>Dados Pessoais</h2>
                <input></input>
                <input></input>
                <input></input>
                <input></input>
                <input></input>
                <input></input>
            </div>
            <div className='address'>
                <h2>Endereço</h2>
                <input></input>
                <input></input>
                <input></input>
                <input></input>
                <input></input>
                <input></input>
            </div>
        </div>
    </RegisterContainer>
  )
}

export default register