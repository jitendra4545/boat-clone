import { USER_REGISTER_FAILURE, USER_REGISTER_PENDING, USER_REGISTER_SUCCESS } from "./actionTypes"


const initialState = {
    token: '',
    users: [],
    isLoading: false,
    isError: false
}


export const reducer = (state = initialState, action) => {
    const { type, payload } = action
    console.log(payload)
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




        default:
            return state
    }

}
