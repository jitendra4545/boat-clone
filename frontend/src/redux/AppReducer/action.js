import axios from "axios"
import { USER_GET_PENDING } from "../Authreducer/actionTypes"
import { PRODUCT_GET_FAILURE, PRODUCT_GET_SUCCESS } from "./actionTypes"




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
        type: USER_GET_PENDING
    }
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

