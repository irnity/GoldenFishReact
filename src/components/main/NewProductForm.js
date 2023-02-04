import { nanoid } from "@reduxjs/toolkit"
import { Form, redirect, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux/es/exports"
import { productsActions } from "../../store/productsSlice"
import classes from "./NewProductForm.module.css"
import { useEffect, useState } from "react"

function NewProductForm({ method }) {
  const products = useSelector((state) => state.products.products)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  // will redirect if data not loaded
  useEffect(() => {
    if (products.length === 0) {
      navigate("/products")
    }
  }, [navigate, products.length])

  const addProductHandler = () => {
    dispatch(productsActions.addProduct())
  }

  const [code, setCode] = useState()

  const codeHandler = (e) => {
    setCode((prevState) => (prevState = e.target.value))
  }

  // check if this code already exists
  let finded = false
  if (products.length !== 0) {
    finded = products.filter((r) => r.code === code).length > 0
  }

  return (
    <Form className={classes.form} method={method}>
      {/* prevent user from post data even if he deleted required in inputs */}
      <p>
        <label htmlFor="code">Code</label>
        <input
          id="code"
          type="text"
          name="code"
          defaultValue={""}
          onChange={codeHandler}
        />
        {finded === true ? <span>wrong</span> : <span>fine</span>}
      </p>
      <p>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" required defaultValue={""} />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input id="image" type="url" name="image" required defaultValue={""} />
      </p>
      <p>
        <label htmlFor="price">Price</label>
        <input
          id="price"
          type="number"
          name="price"
          required
          defaultValue={""}
        />
      </p>
      <p>
        <label htmlFor="inStock">inStock</label>
        <input
          id="inStock"
          type="number"
          name="inStock"
          required
          defaultValue={""}
        />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="5"
          required
          defaultValue={""}
        />
      </p>

      <div className={classes.actions}>
        {/* navigate to home */}
        <button type="button">Cancel</button>
        <button onClick={addProductHandler}>Submit</button>
      </div>
    </Form>
  )
}

export default NewProductForm

export async function action({ request, params }) {
  // get method from form above
  const method = request.method
  // get data from product form page
  const data = await request.formData()

  // edit
  const productData = {
    // new update code creator
    code: data.get("code") || nanoid(),
    title: data.get("title"),
    price: data.get("price"),
    image: data.get("image"),
    description: data.get("description"),
    inStock: data.get("inStock"),
  }

  // if we create newEvent
  let url =
    "https://goldenfishreact-default-rtdb.europe-west1.firebasedatabase.app/products.json"

  const response = await fetch(url, {
    method: method,
    body: JSON.stringify(productData),
    headers: {
      "Content-Type": "application/json",
    },
  })
  if (!response.ok) {
    throw new Error("Sending product data failed")
  }

  return redirect("/products")
}
