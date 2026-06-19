import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Card from "../components/Card"

function Dashboard() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const token = localStorage.getItem("token")
        const response = await fetch("https://sample-e-1.onrender.com/product/getproducts", {
          headers: {
            "Content-Type": "application/json",
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
          },
        })

        if (!response.ok) {
          throw new Error("Failed to load products")
        }

        const data = await response.json()
        const normalizedData = Array.isArray(data)
          ? data
          : Array.isArray(data?.value)
          ? data.value
          : []

        const localProducts = JSON.parse(localStorage.getItem("localProducts") || "[]")
        setProducts([...localProducts, ...normalizedData.slice(0, 6)])
      } catch (err) {
        console.error(err)
        setError("Could not load products. Add them in Postman or check the API.")
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  const handleAddToCart = (product) => {
    setCartCount((c) => c + 1)
  }

  return (
    <div>
      <Navbar cartCount={cartCount} />
      <main
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          padding: "20px",
          minHeight: "calc(100vh - 160px)",
        }}
      >
        {loading ? (
          <p>Loading products...</p>
        ) : error ? (
          <p>{error}</p>
        ) : products.length === 0 ? (
          <p>No products found. Add products via Postman to the API and refresh.</p>
        ) : (
          products.map((product) => (
            <Card
              key={product.id || product._id || product.title}
              image={product.image || product.img}
              title={product.title || product.name || "Unnamed Product"}
              price={product.price || "0"}
              description={product.description}
              category={product.category}
              onAdd={() => handleAddToCart(product)}
            />
          ))
        )}
      </main>
      <Footer />
    </div>
  );
}

export default Dashboard;