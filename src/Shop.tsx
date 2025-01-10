import { useState, useEffect } from 'react'
import { ProductCard, product } from './ProductCard'

export const Shop = () => {

  const [products, setProducts] = useState<product[]>([])

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProducts(json))
  },[])
  return (
    <div>Shop
        
        {products.map(x=><ProductCard product={x} />)}

    </div>
  )
}
