import { USER_GET_SUCCESS, USER_LOGIN_FAILURE, USER_LOGIN_PENDING, USER_LOGIN_SUCCESS, USER_REGISTER_FAILURE, USER_REGISTER_PENDING, USER_REGISTER_SUCCESS } from "./actionTypes"


const initialState = {
    token: '',
    users: [],
    isLoading: false,
    isError: false
}


export const reducer = (state = initialState, action) => {
    const { type, payload } = action
   
    switch (type) {

        case USER_REGISTER_SUCCESS: {
            return {
                ...state, isLoading: false, isError: false
            }
        }

        case USER_REGISTER_FAILURE: {
            return {
                ...state, isLoading: false, isError: true
            }
        }
        case USER_REGISTER_PENDING: {
            return {
                ...state, isLoading: true, isError: false
            }
        }
      case USER_LOGIN_SUCCESS:{
       
        return {
            ...state,token:payload, isLoading: false, isError: false
        }
      }

      case USER_LOGIN_FAILURE: {
        return {
            ...state, isLoading: false, isError: true
        }
    }
    case USER_LOGIN_PENDING: {
        return {
            ...state, isLoading: true, isError: false
        }
    }
    
    case USER_GET_SUCCESS:{
        return {
            ...state,user:payload,isLoading: false, isError: false
        }
    }


        default:
            return state
    }

}
