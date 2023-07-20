'use client';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header'
import Login from '@/components/login/Login';
import React from 'react'

function login() {
  return (
    <div>
      <Header/>
      <Login/>
      <Footer/>
    </div>
  )
}

export default login