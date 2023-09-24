import { ADDRESS_ADD_FAILURE, ADDRESS_ADD_PENDING, ADDRESS_ADD_SUCCESS, ADDRESS_DELETE_FAILURE, ADDRESS_DELETE_PENDING, ADDRESS_DELETE_SUCCESS, ADDRESS_GET_FAILURE, ADDRESS_GET_PENDING, ADDRESS_GET_SUCCESS } from "./actionTypes"

const token = JSON.parse(localStorage.getItem('token'))



const AddressAddSuccees = () => {
    return {
        type: ADDRESS_ADD_SUCCESS
    }
}

const AddressAddFailure = () => {
    return {
        type: ADDRESS_ADD_FAILURE
    }
}

const AddressAddPending = () => {
    return {
        type: ADDRESS_ADD_PENDING
    }
}


const AddressGetSuccees = (payload) => {
    return {
        type: ADDRESS_GET_SUCCESS, payload
    }
}

const AddressGetFailure = () => {
    return {
        type: ADDRESS_GET_FAILURE
    }
}

const AddressGetPending = () => {
    return {
        type: ADDRESS_GET_PENDING
    }
}



const AddressDeleteSuccees = (payload) => {
    return {
        type: ADDRESS_DELETE_SUCCESS,payload
    }
}

const AddressDeleteFailure = () => {
    return {
        type: ADDRESS_DELETE_FAILURE
    }

}
const AddressDeletePending = () => {
    return {
        type: ADDRESS_DELETE_PENDING
    }
}





export const AddAddress=({name,mobile,pincode,address,city,state,landmark})=>(dispatch)=>{
         dispatch(AddressAddPending())
         const payload={
            name,mobile,pincode,address,city,state,landmark
         }

       return  fetch(`http://localhost:3200/user/address`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Authorization":JSON.parse(localStorage.getItem("token"))
            },
            body:JSON.stringify(payload)
         }).then(res=>res.json())
         .then((res)=>{
            console.log(res)
            dispatch(AddressAddSuccees())
         }).catch((err)=>{
            dispatch(AddressAddFailure())
         })

}



export const GetADdress = () => (dispatch) => {
    dispatch(AddressGetPending())
    fetch(`http://localhost:3200/user/address`, {
        headers: {
            "Authorization": JSON.parse(localStorage.getItem("token"))
        }
    }).then((res) => res.json())
        .then((res) => {
            console.log("Address", res)
            dispatch(AddressGetSuccees(res))
        }).catch((err) => {
            console.log(err)
            dispatch(AddressAddFailure())
        })
}





export const DeleteAddress=({id})=>(dispatch)=>{
    console.log("delete",id)
dispatch(AddressDeletePending())
   return fetch(`http://localhost:3200/user/address/${id}`,{
        method:"DELETE",
        headers:{
            "Content-Type":"application/json",
            "Authorization":JSON.parse(localStorage.getItem("token"))
        }
      
    }).then(res=>res.json())
    .then((res)=>{
        console.log(res)
        dispatch(AddressDeleteSuccees(res))
    }).catch((err)=>{
        dispatch(AddressDeleteFailure())
    })


}