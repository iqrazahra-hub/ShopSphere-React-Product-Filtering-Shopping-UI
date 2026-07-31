import { useContext, useState, useMemo } from "react";
import { ThemeContext } from "./context/ThemeContext";

import products from "./data/products.json";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FilterBar from "./components/FilterBar";
import ProductGrid from "./components/ProductGrid";
import ProductModal from "./components/ProductModal";
import Footer from "./components/Footer";

import "./App.css";

function App() {

  const { theme } = useContext(ThemeContext);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = useMemo(() => {

    let result = [...products];

    result = result.filter(product =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );

    if (category !== "All") {
      result = result.filter(
        product => product.category === category
      );
    }

    if (sort === "low") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sort === "high") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;

  }, [search, category, sort]);

  return (

    <div className={`app ${theme}`}>

      <Navbar />

      <Hero />
      

      <FilterBar
        search={search}
        setSearch={setSearch}
        
        setCategory={setCategory}
        sort={sort}
        setSort={setSort}
      />

<ProductGrid
  products={filteredProducts}
  onView={setSelectedProduct}
/>
<ProductModal
  product={selectedProduct}
  onClose={() => setSelectedProduct(null)}
/>
<Footer />
    </div>

  );
}

export default App;