import React from 'react'
import { CategoriesContainer, StyledImageWrapper} from './styles'
import Image from 'next/image'
import Homem from "../../assets/modelo-homem.jpg"
import Mulher from "../../assets/modelo-mulher.jpg"
import Joias from "../../assets/joias.jpg"
import Link from 'next/link'

function Categories() {
    return (
        <CategoriesContainer>
            <div className='wrap'>
                <h1>Categorias</h1>

                <div className='categories'>
                    <button>
                        <StyledImageWrapper>
                            <Link href="/men"><Image className='image-style' src={Homem} alt="modelo-homem"/></Link>
                        </StyledImageWrapper>
                    </button>
                    <button>
                        <StyledImageWrapper>
                            <Link href="/woman"><Image className='image-style' src={Mulher} alt='modelo-mulher'/></Link>
                        </StyledImageWrapper>
                    </button>
                    <button>
                        <StyledImageWrapper>
                            <Link href="/jewelery"><Image className='image-style' src={Joias} alt='joias'/></Link>
                        </StyledImageWrapper>
                    </button>
                </div>
            </div>
        </CategoriesContainer>
    )
}

export default Categories