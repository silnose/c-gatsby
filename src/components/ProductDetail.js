import React, { useState, useContext } from "react"
import priceFormat from "../utils/priceFormat"
import {
  Tag,
  SizeButton,
  QtyButton,
  QtySelect,
  SizeSelect,
  Button,
  StyledProductDetail,
} from "../styles/components"
import { SEO, Stars } from "./"
import { CartContext } from "../context"
export default function ProductDetail({
  unit_amount,
  id,
  product: { name, metadata },
}) {
  const price = priceFormat(unit_amount)
  const [qty, setQty] = useState(1)
  const { addToCart } = useContext(CartContext)

  const handleAddToCard = () => {
    addToCart({ unit_amount, id, name, metadata, quantity: qty })
  }
  return (
    <>
      <StyledProductDetail>
        <SEO title={name} />
        <img src={metadata.img} alt={name} />
        <div>
          <Tag>Popular</Tag>
          <h2>{name}</h2>
          <b>USD {price}</b>
        </div>
        <Stars />
        <small>{metadata.description}</small>
        <p>Quatity:</p>
        <QtySelect>
          <button onClick={() => qty > 1 && setQty(qty - 1)}>-</button>
          <input type="text" disabled value={qty} />
          <button onClick={() => setQty(qty + 1)}>+</button>
        </QtySelect>
        <Button onClick={handleAddToCard}>Add To Cart</Button>
      </StyledProductDetail>
    </>
  )
}
