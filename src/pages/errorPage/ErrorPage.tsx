import React, { FunctionComponent } from "react"
import { Link } from "react-router-dom"

interface ErrorPageProps {}

const ErrorPage: FunctionComponent<ErrorPageProps> = () => {
  return <Link to="/products">RETURN TO PRODUCTS</Link>
}

export default ErrorPage
