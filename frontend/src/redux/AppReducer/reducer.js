import { PRODUCT_DELETE_FAILURE, PRODUCT_DELETE_PENDING, PRODUCT_DELETE_SUCCESS, PRODUCT_EDIT_FAILURE, PRODUCT_EDIT_PENDING, PRODUCT_EDIT_SUCCESS, PRODUCT_GET_FAILURE, PRODUCT_GET_PENDING, PRODUCT_GET_SUCCESS, PRODUCT_POST_FAILURE, PRODUCT_POST_PENDING, PRODUCT_POST_SUCCESS, SINGLE_PRODUCT_GET_FAILURE, SINGLE_PRODUCT_GET_PENDING, SINGLE_PRODUCT_GET_SUCCESS } from "./actionTypes"



const initialState = {
    product: [],
    singleprod: [],
    isLoading: false,
    isError: false
}


export const reducer = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {

        case PRODUCT_GET_SUCCESS: {
            return {
                ...state, product: payload, isLoading: false, isError: false
            }
        }

        case PRODUCT_GET_FAILURE: {
            return {
                ...state, isLoading: false, isError: true
            }
        }
        case PRODUCT_GET_PENDING: {
            return {
                ...state, isLoading: true, isError: false
            }
        }


        case PRODUCT_POST_SUCCESS: {
            return {
                ...state, isLoading: false, isError: false
            }
        }

        case PRODUCT_POST_FAILURE: {
            return {
                ...state, isLoading: false, isError: true
            }
        }
        case PRODUCT_POST_PENDING: {
            return {
                ...state, isLoading: true, isError: false
            }
        }



        case PRODUCT_EDIT_SUCCESS: {
            return {
                ...state, isLoading: false, isError: false
            }
        }

        case PRODUCT_EDIT_FAILURE: {
            return {
                ...state, isLoading: false, isError: true
            }
        }
        case PRODUCT_EDIT_PENDING: {
            return {
                ...state, isLoading: true, isError: false
            }
        }





        case PRODUCT_DELETE_SUCCESS: {
            let newData = state.product.filter((el) => el._id !== payload.id)
            return {
                ...state, product: newData, isLoading: false, isError: false
            }
        }

        case PRODUCT_DELETE_FAILURE: {
            return {
                ...state, isLoading: false, isError: true
            }
        }
        case PRODUCT_DELETE_PENDING: {
            return {
                ...state, isLoading: true, isError: false
            }
        }



        case SINGLE_PRODUCT_GET_SUCCESS: {
            return {
                ...state, singleprod: payload, isLoading: false, isError: false
            }
        }

        case SINGLE_PRODUCT_GET_FAILURE: {
            return {
                ...state, isLoading: false, isError: true
            }
        }
        case SINGLE_PRODUCT_GET_PENDING: {
            return {
                ...state, isLoading: true, isError: false
            }
        }

        default:
            return state
    }

}