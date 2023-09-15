import { PRODUCT_GET_FAILURE, PRODUCT_GET_PENDING, PRODUCT_GET_SUCCESS } from "./actionTypes"



const initialState={
    product:[],
    isLoading:false,
    isError:false
}


export const reducer=(state=initialState,action)=>{
const {type,payload}=action

switch(type){

    case PRODUCT_GET_SUCCESS:{
        return {
            ...state,product:payload,isLoading: false, isError: false
        }
    }

    case PRODUCT_GET_FAILURE : {
        return {
            ...state, isLoading: false, isError: true
        }
    }
    case PRODUCT_GET_PENDING : {
        return {
            ...state, isLoading: true, isError: false
        }
    }

    default :
    return state
}

}