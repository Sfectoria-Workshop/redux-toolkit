import React, { Component } from 'react'
import logo from '../assets/logo.avif'
import { FaCartPlus } from "react-icons/fa"
import Badge from 'react-bootstrap/Badge'
import { FaSearchDollar } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { search } from '../store/productSlice';
const Navbar =({changevue,purchasedproducts})=> {
  const dispatch = useDispatch()
 
        
        return (
            <div className='d-flex justify-content-between align-items-center p-3 shadow position-fixed w-100' style={{ backgroundColor: '#F5F6F8', height: '120px', zIndex:3}}>
                <div>
                   <a href="javascript:undefined" onClick={()=>changevue("Home")}> <img src={logo} alt="MyEMarket" loading='lazy' style={{ width: '100px', height: '100px' }} /></a>
                </div>
                <div className='d-flex gap-3'>
                    <a href="#" onClick={()=>changevue("Home")} className='text-decoration-none text-dark fw-bold text-uppercase fs-5'>Home</a>
                    <a href="#" onClick={()=>changevue("CreateProduct")} className='text-decoration-none text-dark fw-bold text-uppercase fs-5'>Create Product</a>
                    <div className='d-flex gap-2'>
                        <input type="search" name="search" id="" onChange={(event)=>{
                            console.log(event.target.value,"this is the querry")
                            dispatch(search(event.target.value))
                        }} />
                        <FaSearchDollar color='red' size={25}/>
                    </div>
                </div>
                <a href="javascript:undefined" onClick={()=>changevue("Cart")}>
                    <Badge bg="danger" style={{ width: '20px', height: '20px', position: 'absolute', top: '30px', right: '5px' }}>{purchasedproducts?.length}</Badge>
                    <FaCartPlus size={45} />
                </a>

            </div>
        )
    }

export default Navbar