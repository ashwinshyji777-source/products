import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./AddProduct.css"

function AddProduct() {
  const navigate = useNavigate()
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("")
  const [image, setImage] = useState("")
  const [description, setDescription] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!title || !price || !category || !image) {
      setError("Please fill in title, price, category, and image URL.")
      return
    }

    const newProduct = {
      id: `local-${Date.now()}`,
      title,
      price: Number(price),
      category,
      image,
      description,
    }

    const existing = JSON.parse(localStorage.getItem("localProducts") || "[]")
    localStorage.setItem("localProducts", JSON.stringify([newProduct, ...existing]))

    navigate("/dashboard")
  }

  return (
    <div className="add-product-page">
      <div className="add-product-card">
        <h1>Add Product</h1>
        <form onSubmit={handleSubmit} className="add-product-form">
          <label>
            Title
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Product name"
            />
          </label>

          <label>
            Price
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Price"
              min="0"
              step="0.01"
            />
          </label>

          <label>
            Category
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Category"
            />
          </label>

          <label>
            Image URL
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="https://example.com/image.jpg"
            />
          </label>

          <label>
            Description
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Product description"
              rows="4"
            />
          </label>

          {error && <p className="form-error">{error}</p>}

          <button type="submit" className="submit-button">
            Add Product
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddProduct
