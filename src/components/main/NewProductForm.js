import { Form, json, redirect } from "react-router-dom"
import classes from "./NewProductForm.module.css"

function NewProductForm({ method }) {
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
      <div className={classes.actions}>
        {/* navigate to home */}
        <button type="button">Cancel</button>
        <button>Submit</button>
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
    title: data.get("title"),
    image: data.get("image"),
    price: data.get("price"),
    description: data.get("description"),
  }

  // if we create newEvent
  let url =
    "https://goldenfishreact-default-rtdb.europe-west1.firebasedatabase.app/products.json"

  const response = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(productData),
  })
  if (!response.ok) {
    throw new Error("Sending product data failed")
  }

  return redirect("/products")
}
