import { ChangeEvent, useState } from "react"

export interface product {
  id: number
  title: string
  price: string
  category: string
  description: string
  image: string
}

export const ProductCard = ({
  product,
  handleAddToCart,
}: {
  product: product
  handleAddToCart: (product: product, amount: number) => void
}) => {
  const [amount, setAmount] = useState(1)

  return (
    <div className="relative bg-bg w-80 h-80 flex flex-col border-2 p-2 rounded-lg border-main">
      <div
        className="h-3/4 mix-blend-multiply dark:mix-blend-normal bg-contain bg-no-repeat bg-center"
        style={{
          backgroundImage: `url('${product.image}`,
        }}
      ></div>
      <div className="h-1/4">
        <p className="h-8 overflow-hidden overflow-ellipsis whitespace-nowrap">
          {product.title}
        </p>
        <p>{product.price}</p>
        <input
          type="number"
          value={amount}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setAmount(parseInt(e.target.value))
          }}
        ></input>
        <button
          onClick={() => {
            handleAddToCart(product, amount)
          }}
        >
          add
        </button>
      </div>
    </div>
  )
}
