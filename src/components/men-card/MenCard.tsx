import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { CardContainer, MainContainer } from './styles';
import axios from 'axios';
import { BASE_URL } from '@/constants/urls';
import { useRouter } from 'next/navigation';


interface CardProps {
    title: string,
    image: string,
    price: number,
    id: number
}

interface MenProductsProps {
    menproducts: CardProps[];
}

function Card({ menproducts }: MenProductsProps) {

    const [ordem, setOrdem] = useState("");
    const [productid, setIdProduct] = useState<number>()
    const [datastate, setDataState] = useState()

    const router = useRouter()

    const handleOrdem = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setOrdem(e.target.value)
    }

    const handleClick = (id: number) => {
        setIdProduct(id)
        router.push("/detail")
    }


    const Filter = menproducts.map((men: CardProps) => {
        return (
            <CardContainer>
                <div className='container'>
                    <div className='image'>
                        <Image height={300} width={300} alt={men.title} src={men.image} />
                    </div>
                    <h1>{men.title}</h1>
                    <h2>R$ {men.price}</h2>
                    <button onClick={()=>handleClick(men.id)}>Conferir</button>
                </div>
            </CardContainer>
        )
    })

    useEffect(() => {
        axios
            .get(`${BASE_URL}/products/${productid}`)
            .then((res) => {
                setDataState(res.data)
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err.message)
            });
    }, [productid])

    return (
        <MainContainer>
            {Filter}
        </MainContainer>
    )
}

export default Card