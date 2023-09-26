import { SINGLE_USER_SUCCESS, USER_DELETE_FAILURE, USER_DELETE_PENDING, USER_DELETE_SUCCESS, USER_GET_SUCCESS, USER_LOGIN_FAILURE, USER_LOGIN_PENDING, USER_LOGIN_SUCCESS, USER_LOGOUT_SUCCESS, USER_REGISTER_FAILURE, USER_REGISTER_PENDING, USER_REGISTER_SUCCESS } from "./actionTypes"


const initialState = {
    token: '',
    users: [],
    isLoading: false,
    isError: false,
    ActiveUser:[]
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


    case USER_DELETE_SUCCESS:{
       let newUsers=state.users.filter((el)=>el._id!==payload.id)
        return {
            ...state,users:newUsers, isLoading: false, isError: false
        }
      }

      case USER_DELETE_FAILURE: {
        return {
            ...state, isLoading: false, isError: true
        }
    }
    case USER_DELETE_PENDING: {
        return {
            ...state, isLoading: true, isError: false
        }
    }


    
    case USER_GET_SUCCESS:{
        return {
            ...state,users:payload,isLoading: false, isError: false
        }
    }

    case USER_LOGOUT_SUCCESS:{
        return{
            ...state,isLoading: false, isError: false
        }
    }

    case SINGLE_USER_SUCCESS:{
        return {
            ...state,ActiveUser:payload,isLoading: false, isError: false
        }
    }


        default:
            return state
    }

}
