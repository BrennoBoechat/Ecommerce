import Image from 'next/image';
import React, { useState } from 'react'
import { CardContainer, MainContainer } from './styles';

interface CardProps {
    title: string,
    image: string,
    price: number,
}

interface MenProductsProps {
    menproducts: CardProps[];
}

function Card({menproducts} : MenProductsProps) {

    const [ordem, setOrdem] = useState("");

    const handleOrdem = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOrdem(e.target.value)
}


const Filter = menproducts.map((men : CardProps)=>{
    return (
        <CardContainer>
            <button>
                <div className='image'>
                    <Image height={300} width={300} alt={men.title} src={men.image}/>
                </div>
                <h1>{men.title}</h1>
                <h2>R$ {men.price}</h2>
            </button>
        </CardContainer>
        )
    })

    return (
        <MainContainer>
                {Filter}
        </MainContainer>
    )
}

export default Card