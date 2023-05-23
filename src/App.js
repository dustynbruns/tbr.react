import React, { useState} from 'react';
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import ProductScreen from './screens/ProductScreen/ProductScreen';
import CartScreen from './screens/CartScreen/CartScreen';
import ContactScreen from './screens/ContactScreen/ContactScreen';

function App() {
  const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
  const [cart, setCart] = useState(savedCart);
  const subtotal = cart.reduce((total, item) => total + item.quantity * item.price, 0);

  const addToCart = (product, quantity) => {
    console.log("Adding product to cart:", product);
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...existingProduct, quantity: existingProduct.quantity + quantity } : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: quantity }]);
    }
  };

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const onCheckout = () => {
    alert('You have successfully tested this App! Thanks for checking out!');
    setCart([]);
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/products" element={<ProductScreen addToCart={addToCart} />} />
            <Route path="/cart" element={<CartScreen cart={cart} subtotal={subtotal} removeFromCart={removeFromCart} onCheckout={onCheckout}/>} />
            <Route path="/contact" element={<ContactScreen />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


