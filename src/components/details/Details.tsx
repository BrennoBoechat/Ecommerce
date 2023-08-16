import React from 'react'
import { DetailsContainer } from './styles'

interface DetailProductsType {
    title: string,
    price: number,
    image: string,
    description: string
}


interface DetailProductsProps {
    detailproducts: DetailProductsType;
}

function Details({detailproducts}: DetailProductsProps) {

    console.log(detailproducts.description)

    return (
        <DetailsContainer>
            {detailproducts.title}
        </DetailsContainer>
    )
}

export default Details