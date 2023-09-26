import { useNavigate } from "react-router-dom"
import { SINGLE_USER_SUCCESS, USER_DELETE_FAILURE, USER_DELETE_PENDING, USER_DELETE_SUCCESS, USER_GET_FAILURE, USER_GET_PENDING, USER_GET_SUCCESS, USER_LOGIN_FAILURE, USER_LOGIN_PENDING, USER_LOGIN_SUCCESS, USER_LOGOUT_SUCCESS, USER_REGISTER_FAILURE, USER_REGISTER_PENDING, USER_REGISTER_SUCCESS } from "./actionTypes"
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

const UserLogoutSuccees = () => {
    return {
        type: USER_LOGOUT_SUCCESS
    }
}



const UserDeleteFailure = () => {
    return {
        type: USER_DELETE_FAILURE
    }
}

const UserDeletePending = () => {
    return {
        type: USER_DELETE_PENDING
    }
}

const UserDeleteSuccees = (payload) => {
    return {
        type: USER_DELETE_SUCCESS, payload
    }
}



const GetSingleUserSuccees = (payload) => {

    return {
        type: SINGLE_USER_SUCCESS, payload
    }
}


export const SingleUserData = () => (dispatch) => {

    return fetch(`http://localhost:3200/user/single/`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": JSON.parse(localStorage.getItem("token"))
        }
    }).then((res) => res.json())
        .then((res) => {
            // console.log("Singleffffffffffff", res)
            dispatch(GetSingleUserSuccees(res))

        }).catch((err) => {
            console.log(err)

        })

}

export const UserLogout = () => (dispatch) => {
    return fetch(`http://localhost:3200/user/logout/`, {
        method: "PATCH",
        headers: {

            "Authorization": JSON.parse(localStorage.getItem("token"))
        }

    }).then(res => res.json())
        .then((res) => {
            console.log(res)
            dispatch(UserLogoutSuccees())
        }).catch((err) => {
            console.log(err)
        })
}



export const UserRegister = ({ name, email, mobile, password, isAdmin }) => (dispatch) => {
    dispatch(UserRegisterPending())
    const payload = {
        name, email, mobile, password, isAdmin
    }

    return axios.post(`http://localhost:3200/user/register`, payload)
        .then((res) => {
            if (res.data.msg == "You have been registered successfully") {
                dispatch(UserRegisterSuccees())
            } else {
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

    return axios.post("http://localhost:3200/user/login", payload)
        .then((res) => {
            if (res.data.token !== undefined) {
                localStorage.setItem("token", JSON.stringify(res.data.token))
            }

            dispatch(UserLoginSuccees(res.data.token))

            alert(res.data.msg)

        }).catch((err) => {
            console.log(err)
            dispatch(UserLoginFailure(err))
            alert(err.msg)
        })

}


export const UserDelete = ({ id }) => (dispatch) => {
    dispatch(UserDeletePending())
  return  fetch(`http://localhost:3200/admin/user/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": JSON.parse(localStorage.getItem("token"))
        },
    }).then(res => res.json())
        .then((res) => {
            console.log(res)
            dispatch(UserDeleteSuccees(res))
        }).catch((err) => {
            console.log(err)
            dispatch(UserDeleteFailure())
        })
}




export const GetUser = () => (dispatch) => {
    dispatch(UserLoginPending())
    axios.get("http://localhost:3200/user/alluser")
        .then((res) => {
            console.log(res)
            dispatch(UsergetSuccees(res.data))
        }).catch((err) => {
            console.log(err)
            dispatch(UserLoginFailure())
        })
}
