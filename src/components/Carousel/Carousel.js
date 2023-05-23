import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the css
import './Carousel.css';

const CarouselComponent = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('http://localhost:5000/data/products');
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  // Function to pick four random products
  const randomProducts = products.sort(() => 0.5 - Math.random()).slice(0, 4);

  return (
    <div className="carousel-container">
      <Carousel>
        {randomProducts.map((product) => (
          <div key={product.id}>
            <img src={product.image} alt={product.name} />
            <p className="legend">{product.name}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
