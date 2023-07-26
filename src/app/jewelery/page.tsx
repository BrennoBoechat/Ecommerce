'use client';
import { BASE_URL } from '@/constants/urls';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import JeweleryCard from '@/components/jewelery-card/JeweleryCard';

function jewelery() {

  interface Product {
    title: string
    image: string;
  }

  interface JeweleryProductsType {
    title: string,
    image: string,
    price: number,
  }

  const [jeweleryproducts, setJeweleryProducts] = useState<JeweleryProductsType[]>([]);

  console.log(jeweleryproducts)

    useEffect(() => {
      axios
        .get(`${BASE_URL}/products/category/jewelery`)
        .then((res) => {
          setJeweleryProducts(res.data);
        })
        .catch((err) => {
          console.log(err.message)
        });
    }, [setJeweleryProducts])
    

    return (
      <div>
        <JeweleryCard
        jeweleryproducts = {jeweleryproducts}
        />
      </div>
    )
  }

export default jewelery