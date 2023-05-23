import React, { useState, useEffect } from 'react';
import Product from '../../components/Product/Product';
import ProductList from '../../components/ProductList/ProductList';
import './ProductScreen.css';

const ProductScreen = ({ addToCart }) => { 
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);


  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('http://localhost:4000/data/products');
      const data = await response.json();
      console.log('Fetched data:', data);
      setProducts(data);
    };

    fetchProducts()
      .then((data) => {
        if (data && Array.isArray(data)) {
          setProducts(data);
        } else {
          console.error('Failed to fetch products');
        }
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  console.log(products);

  return (
    <div className="product-screen">
      <div className="product-list-container">
        <ProductList products={products} openModal={openModal} />
        {selectedProduct && (
          <Product
            product={selectedProduct}
            addToCart={addToCart} 
            closeModal={closeModal}
          />
        )}
      </div>
    </div>
  );
};

export default ProductScreen;


