function FilterBar({
  search,
  setSearch,
  category,
  setCategory,
  sort,
  setSort,
}) {
  return (
    <section className="filter-section">

      <input
        type="text"
        placeholder="🔍 Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="All">All Categories</option>
        <option value="Electronics">Electronics</option>
        <option value="Fashion">Fashion</option>
        <option value="Gaming">Gaming</option>
        <option value="Furniture">Furniture</option>
        <option value="Home">Home</option>
        <option value="Accessories">Accessories</option>
        <option value="Sports">Sports</option>
        <option value="Books">Books</option>
        <option value="Beauty">Beauty</option>
      </select>

      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
      >
        <option value="">Sort By</option>
        <option value="low">Price: Low → High</option>
        <option value="high">Price: High → Low</option>
      </select>

    </section>
  );
}

export default FilterBar;