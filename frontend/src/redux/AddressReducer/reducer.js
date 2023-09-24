import { ADDRESS_ADD_FAILURE, ADDRESS_ADD_PENDING, ADDRESS_ADD_SUCCESS, ADDRESS_GET_FAILURE, ADDRESS_GET_PENDING, ADDRESS_GET_SUCCESS } from "./actionTypes"

const initialState={
    Address:[],
    isLoading:false,
    isError:false
}


export const reducer=(state=initialState,action)=>{
const {type,payload}=action


switch (type){
         case ADDRESS_ADD_SUCCESS :{
            return {
                ...state,isLoading:false,isError:false
            }
         }

         case ADDRESS_ADD_FAILURE :{
            return {
                ...state,isLoading:false,isError:true
            }
         }
         case ADDRESS_ADD_PENDING :{
            return {
                ...state,isLoading:true,isError:false
            }
         }

         case ADDRESS_GET_SUCCESS :{
            return {
                ...state,Address:payload,isLoading:false,isError:false
            }
         }

         case ADDRESS_GET_FAILURE :{
            return {
                ...state,isLoading:false,isError:true
            }
         }
         case ADDRESS_GET_PENDING :{
            return {
                ...state,isLoading:true,isError:false
            }
         }

    default:
        return state
}


}