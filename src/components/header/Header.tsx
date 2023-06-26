import React from 'react'
import { HeaderContainer } from './styles'
import ProfileIcon from "../../assets/profile-user.svg"
import SearchIcon from "../../assets/search-icon.svg"
import Cart from "../../assets/cart.svg"
import Image from 'next/image'

function Header() {
  return (
    <HeaderContainer>
            <h1>Cactus Company</h1>

            <div className='input'>
              <input placeholder='Buscar'></input>
              <button> <Image alt='buscar' src={SearchIcon}/> </button>
            </div>

            <div className='header-images'>
                <Image alt='conta' src={ProfileIcon}/>
                <Image alt='carrinho' src={Cart}/>
            </div>
    </HeaderContainer>
  )
}

export default Header