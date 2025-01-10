import { useState, useEffect } from "react"
import { Outlet } from "react-router-dom"
import { Navbar } from "./Navbar"
import { product } from "./ProductCard"

function App({ children }: { children?: React.ReactNode }) {
  interface cart {
    [id: string]: {
      amount: number
      price: number
    }
  }

  const [cart, setCart] = useState<cart>({})
  const [cartTotalNumber, setCartTotalNumber] = useState(0)
  const [cartTotalPrice, setCartTotalPrice] = useState(0)

  const handleAddToCart = (product: product, amount: number) => {
    console.log(product.id, amount)
    console.log(cart)
    if (cart[product.id]) {
      setCart({
        ...cart,
        [product.id]: {
          amount: cart[product.id].amount + amount,
          price: product.price,
        },
      })
    } else {
      setCart({
        ...cart,
        [product.id]: { amount: amount, price: product.price },
      })
    }
  }
  useEffect(() => {
    setCartTotalNumber(
      (Object.keys(cart) &&
        Object.keys(cart).reduce(
          (previous, id) => previous + cart[id].amount,
          0
        )) ||
        0
    )
    setCartTotalPrice(
      (Object.keys(cart) &&
        Object.keys(cart).reduce(
          (previous, id) => previous + cart[id].price * cart[id].amount,
          0
        )) ||
        0
    )
  }, [cart])

  return (
    <div className="bg-bg text-main">
      cartTotal: {cartTotalNumber}
      cartPrice: {cartTotalPrice.toFixed(2)}
      <Navbar />
      <div className="max-w-7xl mx-auto p-8">
        {children ?? <Outlet context={handleAddToCart}></Outlet>}
      </div>
    </div>
  )
}

export default App
