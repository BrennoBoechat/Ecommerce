import Image from 'next/image';
import React from 'react'
import { CardContainer } from './styles';

interface CardProps {
    title: string,
    image: string,
    price: number,
}

interface JeweleryProductsProps {
    jeweleryproducts: CardProps[];
}

function JeweleryCard({jeweleryproducts} : JeweleryProductsProps) {

    console.log(jeweleryproducts)

const Filter = jeweleryproducts.map((men : CardProps)=>{
    return (
        <CardContainer>
                <button>
                    <div className='image'>
                        <Image height={200} width={200} alt={men.title} src={men.image}/>
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

export default JeweleryCard