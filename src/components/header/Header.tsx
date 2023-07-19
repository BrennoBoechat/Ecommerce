import { HeaderContainer } from './styles'
import ProfileIcon from "../../assets/profile-user.svg"
import SearchIcon from "../../assets/search-icon.svg"
import Cart from "../../assets/cart.svg"
import Image from 'next/image'
import Link from 'next/link'

function Header() {

  return (
    <HeaderContainer>
      <div className='wrap'>

        <div className='logo'>
          <Link href="/"><h1>Cactus Company</h1></Link>
        </div>

        <div className='input'>
          <input placeholder='Buscar'></input>
          <button> <Image alt='buscar' src={SearchIcon}/> </button>
        </div>

        <ul>
          <div className='header-images'>
            <Link href="/login"><button><Image alt='conta' src={ProfileIcon}/></button></Link>
            <button><Image alt='carrinho' src={Cart}/></button>
          </div>
        </ul>

      </div>
    </HeaderContainer>
  )
}

export default Header