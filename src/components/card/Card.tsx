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
            <div className='card'>
                <Image height={200} width={200} alt={men.title} src={men.image}/>
                <h1>{men.title}</h1>
                <p>{men.price}</p>
            </div>
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