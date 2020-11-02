import { Link } from "gatsby"
import React from "react"
import { SEO } from "../components"
import { Purchase } from "../styles/components"

export default function thanks() {
  return (
    <>
      <SEO title="Checkout Success" />
      <Purchase>
        <h2>Checkout Success</h2>
        <p>Enjoy your swag!</p>
        <p>Don't stop lerning</p>
        <span role="img" aria-label="emoji">
          💝
        </span>
        <Link to="/">Go Back to home </Link>
      </Purchase>
    </>
  )
}
