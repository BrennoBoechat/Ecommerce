import React from 'react'
import { CategoriesContainer, StyledImageWrapper} from './styles'
import Image from 'next/image'
import Homem from "../../assets/modelo-homem.jpg"
import Mulher from "../../assets/modelo-mulher.jpg"
import Joias from "../../assets/joias.jpg"

function Categories() {
    return (
        <CategoriesContainer>
            <div className='wrap'>
                <h1>Categorias</h1>

                <div className='categories'>
                    <button>
                        <StyledImageWrapper>
                            <Image className='image-style' src={Homem} alt="Descrição da imagem"/>
                        </StyledImageWrapper>
                    </button>
                    <button>
                        <StyledImageWrapper>
                            <Image className='image-style' src={Mulher} alt='modelo-mulher'/>
                        </StyledImageWrapper>
                    </button>
                    <button>
                        <StyledImageWrapper>
                            <Image className='image-style' src={Joias} alt='joias'/>
                        </StyledImageWrapper>
                    </button>
                </div>
            </div>
        </CategoriesContainer>
    )
}

export default Categories