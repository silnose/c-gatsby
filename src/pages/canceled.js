import { Link } from "gatsby"
import React from "react"
import { SEO } from "../components"
import { Purchase } from "../styles/components"

export default function thanks() {
  return (
    <>
      <SEO title="Checkout Canceled" />
      <Purchase>
        <h2>Purchase canceled</h2>
        <p>
          We are so sad that you regret but your swag is gonna be waiting for
          you anytime
        </p>
        <p>Don't stop lerning</p>
        <span role="img" aria-label="emoji">
          😞
        </span>
        <Link to="/">Go Back to home </Link>
      </Purchase>
    </>
  )
}
