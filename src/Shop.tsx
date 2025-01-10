import { useState, useEffect } from 'react'
import { ProductCard, product } from './ProductCard'
import useSWR , {Fetcher} from 'swr'

export const Shop = () => {

  const [products, setProducts] = useState<product[]>([])
  const [loading, setLoading] = useState(true)

  const fetcher: Fetcher<product[], string> = (url) => fetch(url).then(res=>res.json())
  

  const {data, error, isLoading } = useSWR('https://fakestoreapi.com/products' ,fetcher)

  useEffect(()=>{
  },[data])
  if (error) return "An error has occurred.";
  if (isLoading) return "Loading...";
  return (
    <div>
      {data?.map(x=><ProductCard product={x} />)}
    </div>
  )
}
