'use client';
import { BASE_URL } from '@/constants/urls';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import WomanCard from '@/components/woman-card/WomanCard';
import { MainContainerWoman } from './styles';

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
      <MainContainerWoman>
        <WomanCard
        womanproducts = {womanproducts}
        />
      </MainContainerWoman>
    )
  }

export default male