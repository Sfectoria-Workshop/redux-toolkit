import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css';
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';
import AllProducts from './components/AllProducts';
import OneProduct from './components/OneProduct';
import axios from 'axios';
import CreateProduct from './components/CreateProduct';
import Cart from './components/Cart';

const App = () => {
  const [vue, setVue] = useState("Home");
  const [products, setProducts] = useState([]);
  const [purchasedproducts, setPurchasedProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/data.json");
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const changevue = (vue) => {
    setVue(vue);
  };

  const addToCart = (p) => {
    setPurchasedProducts([...purchasedproducts, p]);
  };

  const addProduct = (obj) => {
    setProducts([...products, obj]);
  };

  return (
    <div>
      <Navbar purchasedproducts={purchasedproducts} changevue={changevue} />
      <div style={{ paddingTop: '135px', paddingBottom: '90px', position: 'relative' }}>
        {vue === "Home" && <AllProducts products={products} addToCart={addToCart} />}
        {vue === "CreateProduct" && <CreateProduct addProduct={addProduct} changevue={changevue} />}
        {vue === "Cart" && <Cart purchasedproducts={purchasedproducts} changevue={changevue} />}
      </div>
      <Footer />
    </div>
  );
};

export default App;