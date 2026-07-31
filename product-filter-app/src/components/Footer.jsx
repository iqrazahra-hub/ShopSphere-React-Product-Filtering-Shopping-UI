function Footer() {
  return (
    <footer className="footer" id="contact">

      <div className="footer-container">

        <div className="footer-section">
          <h2>🛍 ShopSphere</h2>
          <p>
            Your one-stop destination for electronics, fashion,
            home essentials, and much more.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#categories">Categories</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-section">
          <h3>Categories</h3>
          <p>Electronics</p>
          <p>Fashion</p>
          <p>Furniture</p>
          <p>Gaming</p>
          <p>Sports</p>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <p>📧 support@shopsphere.com</p>
          <p>📱 +92 300 1234567</p>
          <p>🌐 www.shopsphere.com</p>
        </div>

      </div>

      <hr />

      <p className="copyright">
        © 2026 ShopSphere. All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;