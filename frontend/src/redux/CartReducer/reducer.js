import { CART_ADD_FAILURE, CART_ADD_PENDING, CART_ADD_SUCCESS, CART_DELETE_FAILURE, CART_DELETE_PENDING, CART_DELETE_SUCCESS, CART_GET_FAILURE, CART_GET_PENDING, CART_GET_SUCCESS, CART_UPDATE_FAILURE, CART_UPDATE_PENDING, CART_UPDATE_SUCCESS } from "./actionTypes"

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

    case CART_UPDATE_SUCCESS:{
        return {
            ...state,isLoading:false,isError:false
        }
    }

    case CART_UPDATE_FAILURE : {
        return {
            ...state, isLoading: false, isError: true
        }
    }
    case CART_UPDATE_PENDING : {
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

    case CART_DELETE_SUCCESS:{
        let newData=state.cart.filter((el)=>el.id!=payload.id)
        return {
            ...state,cart:newData,isLoading:false,isError:false
        }
    }

    case CART_DELETE_FAILURE : {
        return {
            ...state, isLoading: false, isError: true
        }
    }
    case CART_DELETE_PENDING : {
        return {
            ...state, isLoading: true, isError: false
        }
    }


    default :
    return state
}

}

