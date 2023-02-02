import React from "react"
import { useRouteLoaderData } from "react-router-dom"

function InformationPage() {
  const product = useRouteLoaderData("product-detail")

  return <div>{product.description}</div>
}

export default InformationPage
