import axios from "axios"
import { CART_ADD_FAILURE, CART_ADD_PENDING, CART_ADD_SUCCESS, CART_DELETE_FAILURE, CART_DELETE_PENDING, CART_DELETE_SUCCESS, CART_GET_FAILURE, CART_GET_PENDING, CART_GET_SUCCESS, CART_UPDATE_FAILURE, CART_UPDATE_PENDING, CART_UPDATE_SUCCESS } from "./actionTypes"

const token = JSON.parse(localStorage.getItem('token'))



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
        type: CART_GET_SUCCESS, payload
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


const CartUpdateSuccees = () => {
    return {
        type: CART_UPDATE_SUCCESS
    }
}

const CartUpdateFailure = () => {
    return {
        type: CART_UPDATE_FAILURE
    }

}
const CartUpdatePending = () => {
    return {
        type: CART_UPDATE_PENDING
    }
}



const CartDeleteSuccees = (payload) => {
    return {
        type: CART_DELETE_SUCCESS,payload
    }
}

const CartDeleteFailure = () => {
    return {
        type: CART_DELETE_FAILURE
    }

}
const CartDeletePending = () => {
    return {
        type: CART_DELETE_PENDING
    }
}






export const GetCart = () => (dispatch) => {
    dispatch(CartGetPending())
    fetch(`https://hilarious-ox-lab-coat.cyclic.cloud/cart`, {
        headers: {
            "Authorization": JSON.parse(localStorage.getItem("token"))
        }
    }).then((res) => res.json())
        .then((res) => {
            console.log("Cart", res)
            dispatch(CartGetSuccees(res))
        }).catch((err) => {
            console.log(err)
            dispatch(CartGetFailure())
        })
}







export const CartAdd = ({ id }) => (dispatch) => {
    dispatch(CartAddPending())
    return fetch(`https://hilarious-ox-lab-coat.cyclic.cloud/product/add_cart/${id}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": JSON.parse(localStorage.getItem("token"))
        },
        body: JSON.stringify()
    }).then(res => res.json())
        .then((res) => {
            console.log(res)
            dispatch(CartAddSuccees())

        }).catch(err => {
            console.log(err)
            dispatch(CartAddFailure())
        })
}




export const UpdateCart = ({ qty, id }) => (dispatch) => {
    console.log("action ggghjjhghgj", qty, id)
    if (qty < 1) {
        qty = 1
    }
    dispatch(CartUpdatePending())
    return fetch(`https://hilarious-ox-lab-coat.cyclic.cloud/product/cart/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Authorization": JSON.parse(localStorage.getItem("token"))
        },
        body: JSON.stringify({qty:qty})
    })
        .then(res => res.json())
        .then((res) => {
            console.log(res)
            dispatch(CartUpdateSuccees())
        }).catch((err) => {
            console.log(err)
            dispatch(CartUpdatePending())
        })

}




export const DeleteCart=({id})=>(dispatch)=>{
    console.log("delete",id)
dispatch(CartDeletePending())
   return fetch(`https://hilarious-ox-lab-coat.cyclic.cloud/cart/${id}`,{
        method:"DELETE",
        headers:{
            "Content-Type":"application/json",
            "Authorization":JSON.parse(localStorage.getItem("token"))
        }
      
    }).then(res=>res.json())
    .then((res)=>{
        console.log(res)
        dispatch(CartDeleteSuccees(res))
    }).catch((err)=>{
        dispatch(CartDeleteFailure())
    })


}