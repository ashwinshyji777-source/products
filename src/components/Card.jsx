import "./card.css"

const API_BASE_URL = "https://sample-e-1.onrender.com"

function Card({ image, title, price, description, category }) {
    const imageUrl = image
        ? image.startsWith("http")
            ? image
            : `${API_BASE_URL}/${image}`
        : "https://via.placeholder.com/250x220"

    return (
        <article className="product-card">
            <img
                src={imageUrl}
                alt={title || "Product"}
                className="product-image"
            />

            <p className="product-tag">{category || "General"}</p>

            <h2 className="product-name">{title || "Unnamed Product"}</h2>

            <p className="product-price">₹{price || 0}</p>

            <p className="product-description">
                {description || "No description available."}
            </p>

            <button type="button">Add to Cart</button>
        </article>
    )
}

export default Card

