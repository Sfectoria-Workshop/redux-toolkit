import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { api } from "../config";

export const fetchProducts = createAsyncThunk("fetch/products",async ()=> {
    try {
        const response = await axios.get(`${api}/data.json`)
        return response.data
        
    } catch (error) {
        console.log(error)
    }
})

export const search = createAsyncThunk('search/product(s)',async (query)=>{
    try {
        const response = await axios.get(`${api}/data.json`)
        const filtred = response.data.filter((product,index)=>product.name.toLowerCase().includes(query.toLowerCase()))
        return filtred
    } catch (error) {
        console.log(error)
    }
})

const productSlice = createSlice({
    name : "products",
    initialState:{
        loading : true,
        error : null,
        products: []
    },
    reducers : {},
    extraReducers(builder){
        builder.addCase(fetchProducts.fulfilled,(state,action)=>{
            state.loading = false 
            state.products = action.payload
        })
        
        builder.addCase(search.fulfilled,(state,action)=>{
            state.products = action.payload
        })
    }
})
export default productSlice.reducer