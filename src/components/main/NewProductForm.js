import { Form } from "react-router-dom"
import classes from "./NewProductForm.module.css"

function NewProductForm() {


  return (
    <Form className={classes.form} onSubmit={}>
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
        <input id="price" type="number" name="price" required defaultValue={""} />
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
