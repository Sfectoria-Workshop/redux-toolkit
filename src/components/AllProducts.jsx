import React from 'react';
import { products } from '../data';
import OneProduct from './OneProduct';

const AllProducts = ({ products, addToCart }) => {
  return (
    <div className='d-flex flex-wrap gap-3 justify-content-center'>
      {products.map((product, index) => (
        <OneProduct
          key={index}
          product={product}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
};

export default AllProducts;