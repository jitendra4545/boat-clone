import axios from "axios"
import { USER_GET_PENDING } from "../Authreducer/actionTypes"
import { PRODUCT_GET_FAILURE, PRODUCT_GET_PENDING, PRODUCT_GET_SUCCESS, SINGLE_PRODUCT_GET_FAILURE, SINGLE_PRODUCT_GET_PENDING, SINGLE_PRODUCT_GET_SUCCESS } from "./actionTypes"




const ProductGetSuccees = (payload) => {
    return {
        type: PRODUCT_GET_SUCCESS, payload
    }
}

const ProductGetFailure = () => {
    return {
        type: PRODUCT_GET_FAILURE
    }
}

const ProductGetPending = () => {
    return {
        type: PRODUCT_GET_PENDING
    }
}


const SingleProductGetSuccees = (payload) => {
    return {
        type: SINGLE_PRODUCT_GET_SUCCESS, payload
    }
}

const SingleProductGetFailure = () => {
    return {
        type: SINGLE_PRODUCT_GET_FAILURE
    }
}

const SingleProductGetPending = () => {
    return {
        type: SINGLE_PRODUCT_GET_PENDING  }
}



export const GetData=()=>(dispatch)=>{
    dispatch(ProductGetPending())
    axios.get("http://localhost:3200/product")
    .then((res)=>{
        console.log(res)
        dispatch(ProductGetSuccees(res.data))
    }).catch((err)=>{
        dispatch(ProductGetFailure())
    })
     
}


export const GetSingleData=({id})=>(dispatch)=>{
    dispatch(SingleProductGetPending())
    axios.get(`http://localhost:3200/product/${id}`)
    .then((res)=>{
        
        dispatch(SingleProductGetSuccees(res.data))
    }).catch((err)=>{
        dispatch(SingleProductGetFailure())
    })
     
}

