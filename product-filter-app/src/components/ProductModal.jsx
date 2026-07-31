function ProductModal({ product, onClose }) {

  if (!product) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>

      <div
        className="modal"
        onClick={(e) => e.stopPropagation()}
      >

        <button className="close-btn" onClick={onClose}>
          ✖
        </button>

        <img src={product.image} alt={product.name} />

        <h2>{product.name}</h2>

        <p><strong>Category:</strong> {product.category}</p>

        <p><strong>Price:</strong> ${product.price}</p>

        <p><strong>Rating:</strong> ⭐ {product.rating}</p>

        <p>
          <strong>Status:</strong>{" "}
          {product.stock ? "🟢 In Stock" : "🔴 Out of Stock"}
        </p>

        <p>{product.description}</p>

      </div>

    </div>
  );
}

export default ProductModal;