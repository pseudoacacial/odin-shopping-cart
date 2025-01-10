export interface product {
  id:number,
  title:string,
  price:string,
  category:string,
  description:string,
  image:string
}

export const ProductCard = ({product}:{product:product}) => {
  return (
    <div className="bg-bg w-80 h-100 flex flex-col border-2 p-2 rounded-lg border-main">
      <img src={product.image}></img>
      <p>{product.title}</p>
      <p>{product.price}</p>
      
    </div>
  )
}
