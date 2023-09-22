import { CART_ADD_FAILURE, CART_ADD_PENDING, CART_ADD_SUCCESS, CART_GET_FAILURE, CART_GET_PENDING, CART_GET_SUCCESS } from "./actionTypes"

const initialState={
    cart:[],
    isLoading:false,
    isError:false
}


export const reducer=(state=initialState,action)=>{
const {type,payload}=action

switch(type){
    case CART_ADD_SUCCESS:{
        return {
            ...state,isLoading:false,isError:false
        }
    }

    case CART_ADD_FAILURE : {
        return {
            ...state, isLoading: false, isError: true
        }
    }
    case CART_ADD_PENDING : {
        return {
            ...state, isLoading: true, isError: false
        }
    }

    case CART_GET_SUCCESS:{
        return {
            ...state,cart:payload,isLoading:false,isError:false
        }
    }

    case CART_GET_FAILURE : {
        return {
            ...state, isLoading: false, isError: true
        }
    }
    case CART_GET_PENDING : {
        return {
            ...state, isLoading: true, isError: false
        }
    }

    default :
    return state
}

}

