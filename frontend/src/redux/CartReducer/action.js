import axios from "axios"
import { CART_ADD_FAILURE, CART_ADD_PENDING, CART_ADD_SUCCESS, CART_GET_FAILURE, CART_GET_PENDING, CART_GET_SUCCESS } from "./actionTypes"

const token=JSON.parse(localStorage.getItem('token'))
console.log("asli",token)


const CartAddSuccees = () => {
    return {
        type: CART_ADD_SUCCESS
    }
}

const CartAddFailure = () => {
    return {
        type: CART_ADD_FAILURE
    }
}

const CartAddPending = () => {
    return {
        type: CART_ADD_PENDING
    }
}


const CartGetSuccees = (payload) => {
    return {
        type: CART_GET_SUCCESS,payload
    }
}

const CartGetFailure = () => {
    return {
        type: CART_GET_FAILURE
    }
}

const CartGetPending = () => {
    return {
        type: CART_GET_PENDING
    }
}



export const GetCart=()=>(dispatch)=>{
    dispatch(CartGetPending())
         fetch(`http://localhost:3200/cart`,{
            headers:{
                "Authorization":JSON.parse(localStorage.getItem("token"))
            }
         }).then((res)=>res.json())
         .then((res)=>{
            console.log("Cart",res)
            dispatch(CartGetSuccees(res))
         }).catch((err)=>{
            console.log(err)
            dispatch(CartGetFailure())
         })
}







export const CartAdd=({id})=>(dispatch)=>{
    dispatch(CartAddPending())
   return fetch(`http://localhost:3200/product/add_cart/${id}`,{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
          "Authorization":JSON.parse(localStorage.getItem("token"))
        },
        body:JSON.stringify()
       }).then(res=>res.json())
        .then((res)=>{
           console.log(res)   
            dispatch(CartAddSuccees())
             
        }).catch(err=>{
            console.log(err)
            dispatch(CartAddFailure())
        })
}
