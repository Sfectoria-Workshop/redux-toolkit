import React, { useEffect } from "react";
import { products } from "../data";
import OneProduct from "./OneProduct";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/productSlice";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';

const AllProducts = ({ addToCart }) => {
  const products = useSelector((state) => state.products.products);
  const loading = useSelector((state) => state.products.loading);
  console.log(products, "this is prod");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="d-flex flex-wrap gap-3 justify-content-center">
      {loading === true ? (
        [1,2,3,4,5,6,7].map((e,i)=>(
          <Card style={{ width: "18rem" }} key={i}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Placeholder as={Card.Title} animation="glow">
              <Placeholder xs={6} />
            </Placeholder>
            <Placeholder as={Card.Text} animation="glow">
              <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
              <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
              <Placeholder xs={8} />
            </Placeholder>
            <Placeholder.Button variant="primary" xs={6} />
          </Card.Body>
        </Card>
        ))
      ) : (
        products.map((product, index) => (
          <OneProduct key={index} product={product} addToCart={addToCart} />
        ))
      )}
    </div>
  );
};

export default AllProducts;
