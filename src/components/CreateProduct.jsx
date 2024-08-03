import React, { useState } from 'react';

const CreateProduct = ({ addProduct, changevue }) => {
  const [product, setProduct] = useState({
    id: crypto.randomUUID(),
    image: "",
    price: "",
    category: "",
    name: "",
    description: ""
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  }

  const handleSubmit = () => {
    addProduct(product);
    setProduct({
      id: crypto.randomUUID(),
      image: "",
      price: "",
      category: "",
      name: "",
      description: ""
    });
    changevue("Home");
  }

  return (
    <div className='bg-light d-flex flex-column justify-content-center align-items-center '>
      <label htmlFor="basic-url">Your Product Name</label>
      <input name="name" type="text" className="form-control h-300 w-40" id="basic-url" aria-describedby="basic-addon3" onChange={handleChange} />
      <label htmlFor="basic-url">Your Product image URL</label>
      <input name="image" type="text" className="form-control h-300 w-40" id="basic-url" aria-describedby="basic-addon3" onChange={handleChange} />
      <label htmlFor="basic-url">Your Product's Price</label>
      <input name="price" type="text" className="form-control h-300 w-40" id="basic-url" aria-describedby="basic-addon3"  onChange={handleChange} />
      <label htmlFor="basic-url">Your Product's Category</label>
      <input name="category" type="text" className="form-control h-300 w-40" id="basic-url" aria-describedby="basic-addon3"  onChange={handleChange} />
      <label htmlFor="basic-url">Your Product's Description </label>
      <input name="description" type="text" className="form-control h-300 w-40" id="basic-url" aria-describedby="basic-addon3"  onChange={handleChange} />
      <div className='d-flex justify-content-end p-5 gap-4'>
        <button className='btn btn-danger' onClick={handleSubmit}> Add Product </button>
        <button className='btn btn-outline-danger'> Cancel </button>
      </div>
    </div>
  );
}

export default CreateProduct;