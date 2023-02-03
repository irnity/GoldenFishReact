import { nanoid } from "@reduxjs/toolkit"
import { Form, redirect } from "react-router-dom"
import { useDispatch } from "react-redux/es/exports"
import { productsActions } from "../../store/productsSlice"
import classes from "./NewProductForm.module.css"

function NewProductForm({ method }) {
  const dispatch = useDispatch()

  const addProductHandler = () => {
    dispatch(productsActions.addProduct())
  }

  return (
    <Form className={classes.form} method={method}>
      {/* prevent user from post data even if he deleted required in inputs */}
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
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="5"
          required
          defaultValue={""}
        />
      </p>
      <p>
        <label htmlFor="inStock">inStock</label>
        <textarea
          id="inStock"
          type="number"
          name="inStock"
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
    code: nanoid(),
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
