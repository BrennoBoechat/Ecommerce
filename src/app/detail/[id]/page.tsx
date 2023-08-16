'use client';
import Details from "@/components/details/Details";
import { BASE_URL } from "@/constants/urls";
import axios from "axios";
import { useEffect, useState } from "react";

interface ProductProps {
    params: {
        id: string;
    }
}
interface DetailProductsType {
    title: string,
    price: number,
    image: string,
    description: string
}

export default function Detail({ params }: ProductProps) {

    const [detailproducts, setDetailProducts] = useState<DetailProductsType>();

    useEffect(() => {
        axios
            .get(`${BASE_URL}/products/${params.id}`)
            .then((res) => {
                setDetailProducts(res.data);
            })
            .catch((err) => {
                console.log(err.message)
            });
    }, [setDetailProducts])

    useEffect(() => {
        console.log(detailproducts)
    }, [detailproducts])

    return (
        <div>
            <Details
            detailproducts = {detailproducts}
            />
            <h1>Product: {params.id}</h1>
        </div>
    )
}