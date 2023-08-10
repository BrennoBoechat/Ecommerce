'use client';
import { BASE_URL } from '@/constants/urls';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import MenCard from '@/components/men-card/MenCard';
import { MainContainer } from './styles';

function men() {

  // interface Product {
  //   title: string
  //   image: string;
  // }

  interface MenProductsType {
    title: string,
    image: string,
    price: number,
    id: number
  }

  const [menproducts, setMenProducts] = useState<MenProductsType[]>([]);


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
      <MainContainer>
        <MenCard
        menproducts = {menproducts}
        />
      </MainContainer>
    )
  }

export default men