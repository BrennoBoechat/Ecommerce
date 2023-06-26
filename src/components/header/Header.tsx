import React from 'react'
import { HeaderContainer } from './styles'
import ProfileIcon from "../../assets/profile-user.svg"
import Cart from "../../assets/cart.svg"
import Image from 'next/image'

function Header() {
  return (
    <HeaderContainer>
        <div className='header-itens'>
            <h1>Cactus Company</h1>
            <input placeholder='Buscar'></input>
            <div className='header-images'>
                <Image alt='conta' src={ProfileIcon}/>
                <Image alt='carrinho' src={Cart}/>
            </div>
        </div>
    </HeaderContainer>
  )
}

export default Header