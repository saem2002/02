'use client'
import { useEffect, useState } from 'react';
import './style.css'
import style from '@/styles/style.module.css'
export default function Home() {

  const[Product,setProduct] = useState([]);
  useEffect(async() => {
    let res = await fetch("https://dummyjson.com/products");
    let data = await res.json();
    console.log(data)
    setProduct(data.products);

  }, [])
  
  return (
    <div>
      <h1>Product List</h1>
      {
        Product.map((item)=>{
          return <h1>Name:{item.title}</h1> 
        })
      }

    </div>
  );
}