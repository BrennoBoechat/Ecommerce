'use client';
import { BASE_URL } from '@/constants/urls';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import WomanCard from '@/components/woman-card/WomanCard';

function male() {

  interface Product {
    title: string
    image: string;
  }

  interface WomanProductsType {
    title: string,
    image: string,
    price: number,
  }

  const [womanproducts, setWomanProducts] = useState<WomanProductsType[]>([]);

  console.log(womanproducts)

    useEffect(() => {
      axios
        .get(`${BASE_URL}/products/category/women's clothing`)
        .then((res) => {
          setWomanProducts(res.data);
        })
        .catch((err) => {
          console.log(err.message)
        });
    }, [setWomanProducts])
    

    return (
      <div>
        <WomanCard
        womanproducts = {womanproducts}
        />
      </div>
    )
  }

export default male