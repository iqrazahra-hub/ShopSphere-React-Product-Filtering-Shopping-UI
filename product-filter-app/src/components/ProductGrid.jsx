import ProductCard from "./ProductCard";

function ProductGrid({ products }) {

  return (

    <section className="products" id="products">

      <h2>Our Products</h2>

      <div className="product-grid">

        {products.length > 0 ? (

          products.map((product) => (

            <ProductCard
              key={product.id}
              product={product}
            />

          ))

        ) : (

          <h3>No Products Found</h3>

        )}

      </div>

    </section>

  );

}

export default ProductGrid;