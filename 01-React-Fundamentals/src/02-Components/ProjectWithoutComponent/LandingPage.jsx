import React from 'react';

function LandingPage() {
  return (
    <div>
      <header>
        <h1>Welcome to Our Site</h1>
        <p>Your one-stop solution for everything!</p>
      </header>

      <div className="section">
        <h2>About Us</h2>
        <p>We provide amazing services to our customers worldwide.</p>
      </div>

      <div className="section">
        <h2>Our Services</h2>
        <ul>
          <li>Web Development</li>
          <li>App Development</li>
          <li>SEO Optimization</li>
        </ul>
      </div>

      <div className="section">
        <h2>Contact Us</h2>
        <p>Email: contact@oursite.com</p>
      </div>

      <footer>
        <p>&copy; 2024 Our Site. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default LandingPage;
