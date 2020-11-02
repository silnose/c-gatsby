import React, { useState } from "react"
import { SelectStars } from "../styles/components"
export default function Stars() {
  const [stars, setStars] = useState(5)
  const items = []
  for (let i = 1; i < 6; i++) {
    items.push(
      <span onClick={() => setStars(i)} key={i}>
        ★
      </span>
    )
  }

  return (
    <>
      <SelectStars selected={stars}>{items}</SelectStars>
    </>
  )
}
