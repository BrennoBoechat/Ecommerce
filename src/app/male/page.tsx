'use client';
import { BASE_URL } from '@/constants/urls';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from '@/components/card/Card';

function male() {

  interface Product {
    title: string
    image: string;
  }

  interface MenProductsType {
    title: string,
    image: string,
    price: number,
  }

  const [menproducts, setMenProducts] = useState<MenProductsType[]>([]);

  console.log(menproducts)

    useEffect(() => {
      axios
        .get(`${BASE_URL}/products/category/men's clothing`)
        .then((res) => {
          setMenProducts(res.data);
        })
        .catch((err) => {
          console.log(err.message)
        });
    }, [setMenProducts])
    

    return (
      <div>
        <Card
        menproducts = {menproducts}
        />
      </div>
    )
  }

export default male