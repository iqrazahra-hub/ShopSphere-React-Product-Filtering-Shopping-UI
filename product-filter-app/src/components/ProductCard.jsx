import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductCard({ product }) {

  const { addToCart } = useContext(CartContext);

  return (

    <div className="product-card">

      <img src={product.image} alt={product.name}/>

      <h3>{product.name}</h3>

      <p>{product.category}</p>

      <p>${product.price}</p>

      <p>⭐ {product.rating}</p>

      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>

    </div>

  );

}

export default ProductCard;