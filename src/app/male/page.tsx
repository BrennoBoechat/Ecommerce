'use client';
import { BASE_URL } from '@/constants/urls';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProductCard from '@/components/product-card/ProductCard';

function male() {

  interface Product {
    id: number;
    name: string;
    title: string;
  }

  const [menproducts, setMenProducts] = useState<Product[]>([]);
  
  const ProcessedProducts = menproducts.map(item => ({ ...item, modificado: true }));


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

  const Filter = ProcessedProducts.map((men)=>{
    return (
      <div>
        {men.title}
      </div>
    )
  })

  console.log(menproducts)

  return (
    <div>
      {Filter}
      <ProductCard/>
    </div>
  )
}

export default male