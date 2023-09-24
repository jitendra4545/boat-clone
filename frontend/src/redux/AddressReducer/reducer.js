import { ADDRESS_ADD_FAILURE, ADDRESS_ADD_PENDING, ADDRESS_ADD_SUCCESS, ADDRESS_DELETE_FAILURE, ADDRESS_DELETE_PENDING, ADDRESS_DELETE_SUCCESS, ADDRESS_GET_FAILURE, ADDRESS_GET_PENDING, ADDRESS_GET_SUCCESS } from "./actionTypes"

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
         case ADDRESS_DELETE_SUCCESS:{
            let newData=state.Address.filter((el)=>el.id!=payload.id)
            return {
                ...state,Address:newData,isLoading:false,isError:false
            }
        }
    
        case ADDRESS_DELETE_FAILURE : {
            return {
                ...state, isLoading: false, isError: true
            }
        }
        case ADDRESS_DELETE_PENDING : {
            return {
                ...state, isLoading: true, isError: false
            }
        }
    
    
    default:
        return state
}


}