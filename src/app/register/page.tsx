'use client';
import React from 'react'
import { RegisterContainer } from './styles'
import Register from '@/components/register/Register';

function register() {
  return (
    <RegisterContainer>
        <Register/>
    </RegisterContainer>
  )
}

export default register