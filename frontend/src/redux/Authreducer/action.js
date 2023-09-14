import { useNavigate } from "react-router-dom"
import { USER_GET_FAILURE, USER_GET_PENDING, USER_GET_SUCCESS, USER_LOGIN_FAILURE, USER_LOGIN_PENDING, USER_LOGIN_SUCCESS, USER_REGISTER_FAILURE, USER_REGISTER_PENDING, USER_REGISTER_SUCCESS } from "./actionTypes"
import axios from 'axios'

const UserRegisterSuccees = (payload) => {
    return {
        type: USER_REGISTER_SUCCESS, payload
    }
}

const UserRegisterFailure = () => {
    return {
        type: USER_REGISTER_FAILURE
    }
}

const UserRegisterPending = () => {
    return {
        type: USER_REGISTER_PENDING
    }
}


const UsergetSuccees = (payload) => {
    return {
        type: USER_GET_SUCCESS, payload
    }
}

const UsergetFailure = () => {
    return {
        type: USER_GET_FAILURE
    }
}

const UsergetPending = () => {
    return {
        type: USER_GET_PENDING
    }
}


const UserLoginSuccees = (payload) => {
    return {
        type: USER_LOGIN_SUCCESS, payload
    }
}

const UserLoginFailure = () => {
    return {
        type: USER_LOGIN_FAILURE
    }
}

const UserLoginPending = () => {
    return {
        type: USER_LOGIN_PENDING
    }
}




export const UserRegister = ({ name, email, mobile, password, isAdmin }) => (dispatch) => {
    dispatch(UserRegisterPending())
    const payload = {
        name, email, mobile, password, isAdmin
    }
    
    return axios.post(`http://localhost:3200/user/register`, payload)
        .then((res) => {
            if( res.data.msg=="You have been registered successfully"){
                dispatch(UserRegisterSuccees())
            }else{
                alert(res.data.msg)
            }
           
            console.log(res.data)
           
        }).catch((err) => {
            console.log(err)
           
            dispatch(UserRegisterFailure())
            alert("error in code")
        })


}



export const UserLogin = ({ email, password }) => (dispatch) => {
    dispatch(UserLoginPending())
    const payload = {
        email, password
    }

    return axios.post("http://localhost:3200/user/login",payload)
        .then((res) => {
            dispatch(UserLoginSuccees(res.data.token))
            console.log(res.data)
            alert(res.data.msg)
            localStorage.setItem("token",JSON.stringify(res.data.token))
        }).catch((err) => {
            console.log(err)
            dispatch(UserLoginFailure(err))
            alert(err.msg)
        })

}



export const GetUser=()=>(dispatch)=>{
    dispatch(UserLoginPending())
       axios.get("http://localhost:3200/user/alluser")
       .then((res)=>{
        console.log(res)
        dispatch(UsergetSuccees(res.data))
       }).catch((err)=>{
        console.log(err)
        dispatch(UserLoginFailure())
       })
}
