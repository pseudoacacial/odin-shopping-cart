import { useState, useEffect } from "react"
import { ProductCard, product } from "./ProductCard"
import useSWR, { Fetcher } from "swr"
import { useOutletContext } from "react-router-dom"

export const Shop = () => {
  const fetcher: Fetcher<product[], string> = (url) => {
    console.log("fetching products")
    return fetch(url).then((res) => res.json())
  }

  const { data, error, isLoading } = useSWR(
    "https://fakestoreapi.com/products",
    fetcher
  )

  const handleAddToCart =
    useOutletContext<(product: product, amount: number) => void>()

  if (error) return "An error has occurred."
  if (isLoading) return "Loading..."
  return (
    <div className="flex flex-wrap gap-4">
      {data?.map((x) => (
        <ProductCard key={x.id} product={x} handleAddToCart={handleAddToCart} />
      ))}
    </div>
  )
}
