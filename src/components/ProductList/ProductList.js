import React, { useState } from 'react';
import './ProductList.css';
import Product from '../Product/Product';

const ProductList = ({ products, openModal }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    openModal(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="product-list">
      {Array.isArray(products) &&
        products.map((product) => (
          <div key={product.id} className="product-card" onClick={() => handleOpenModal(product)}>
            <img src={product.image} alt={product.name} className="product-card-image" />
            <h3 className="product-card-name">{product.name}</h3>
            <p className="product-card-price">${product.price.toFixed(2)}</p>
          </div>
        ))}
      {selectedProduct && <Product product={selectedProduct} closeModal={closeModal} />}
    </div>
  );  
};

export default ProductList;


