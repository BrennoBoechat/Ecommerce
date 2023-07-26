import Image from 'next/image';
import React from 'react'
import { CardContainer } from './styles';

interface CardProps {
    title: string,
    image: string,
    price: number,
}

interface WomanProductsProps {
    womanproducts: CardProps[];
}

function WomanCard({womanproducts} : WomanProductsProps) {

    console.log(womanproducts)

const Filter = womanproducts.map((woman : CardProps)=>{
    return (
        <CardContainer>
                <button>
                    <div className='image'>
                        <Image height={300} width={300} alt={woman.title} src={woman.image}/>
                    </div>
                    <h1>{woman.title}</h1>
                    <h2>R$ {woman.price}</h2>
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

export default WomanCard