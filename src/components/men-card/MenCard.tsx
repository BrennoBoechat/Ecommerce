import Image from 'next/image';
import React from 'react'
import { CardContainer } from './styles';

interface CardProps {
    title: string,
    image: string,
    price: number,
}

interface MenProductsProps {
    menproducts: CardProps[];
}

function Card({menproducts} : MenProductsProps) {

    console.log(menproducts)

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
        <div>
            {Filter}
        </div>
    )
}

export default Card