import axios from "axios"
import { USER_GET_PENDING } from "../Authreducer/actionTypes"
import { PRODUCT_DELETE_FAILURE, PRODUCT_DELETE_PENDING, PRODUCT_DELETE_SUCCESS, PRODUCT_EDIT_FAILURE, PRODUCT_EDIT_PENDING, PRODUCT_EDIT_SUCCESS, PRODUCT_GET_FAILURE, PRODUCT_GET_PENDING, PRODUCT_GET_SUCCESS, PRODUCT_POST_FAILURE, PRODUCT_POST_PENDING, PRODUCT_POST_SUCCESS, SINGLE_PRODUCT_GET_FAILURE, SINGLE_PRODUCT_GET_PENDING, SINGLE_PRODUCT_GET_SUCCESS } from "./actionTypes"




const ProductGetSuccees = (payload) => {
    return {
        type: PRODUCT_GET_SUCCESS, payload
    }
}

const ProductGetFailure = () => {
    return {
        type: PRODUCT_GET_FAILURE
    }
}

const ProductGetPending = () => {
    return {
        type: PRODUCT_GET_PENDING
    }
}


const ProductEditSuccees = () => {
    return {
        type: PRODUCT_EDIT_SUCCESS
    }
}

const ProductEditFailure = () => {
    return {
        type: PRODUCT_EDIT_FAILURE
    }
}

const ProductEditPending = () => {
    return {
        type: PRODUCT_EDIT_PENDING
    }
}




const ProductPostSuccees = () => {
    return {
        type: PRODUCT_POST_SUCCESS
    }
}

const ProductPostFailure = () => {
    return {
        type: PRODUCT_POST_FAILURE
    }
}

const ProductPostPending = () => {
    return {
        type: PRODUCT_POST_PENDING
    }
}



const ProductDeleteSuccees = (payload) => {
    return {
        type: PRODUCT_DELETE_SUCCESS, payload
    }
}

const ProductDeleteFailure = () => {
    return {
        type: PRODUCT_DELETE_FAILURE
    }
}

const ProductDeletePending = () => {
    return {
        type: PRODUCT_DELETE_PENDING
    }
}

const SingleProductGetSuccees = (payload) => {
    return {
        type: SINGLE_PRODUCT_GET_SUCCESS, payload
    }
}

const SingleProductGetFailure = () => {
    return {
        type: SINGLE_PRODUCT_GET_FAILURE
    }
}

const SingleProductGetPending = () => {
    return {
        type: SINGLE_PRODUCT_GET_PENDING
    }
}



export const AddData = (payload) => (dispatch) => {

    dispatch(ProductPostPending())
    return fetch(`http://localhost:3200/admin/product/add`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": JSON.parse(localStorage.getItem('token'))
        },
        body: JSON.stringify(payload)
    }).then(res => res.json(payload))
        .then((res) => {
            console.log(res)
            dispatch(ProductPostSuccees())
        }).catch((err) => {
            console.log(err)
            dispatch(ProductPostFailure())
        })

}



export const DeleteData = ({ id }) => (dispatch) => {
    dispatch(ProductDeletePending())
    return fetch(`http://localhost:3200/admin/product/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": JSON.parse(localStorage.getItem("token"))
        },

    }).then(res => res.json())
        .then((res) => {
            console.log(res)
            dispatch(ProductDeleteSuccees(res))
        }).catch((err) => {
            console.log(err)
            dispatch(ProductDeleteFailure())
        })

}



export const EditData = ({ id, category,
    price, price2, product_item__primary_image, product_item__secondary_image,
    product_item_meta__title, priority, priority2, priority3,
    feature, feature2, feature3 }) => (dispatch) => {

        const payload = {
            category,
            price, price2, product_item__primary_image, product_item__secondary_image,
            product_item_meta__title, priority, priority2, priority3,
            feature, feature2, feature3
        }

        dispatch(ProductEditPending())
        return fetch(`http://localhost:3200/admin/product/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": JSON.parse(localStorage.getItem("token"))
            },
            body: JSON.stringify(payload)
        }).then(res => res.json())
            .then((res) => {
                console.log(res)
                dispatch(ProductEditSuccees())
            }).catch((err) => {
                console.log(err)
                dispatch(ProductEditFailure())
            })

    }







export const GetData = () => (dispatch) => {
    dispatch(ProductGetPending())
    axios.get("http://localhost:3200/product")
        .then((res) => {
            console.log(res)
            dispatch(ProductGetSuccees(res.data))
        }).catch((err) => {
            dispatch(ProductGetFailure())
        })

}







export const GetSingleData = ({ id }) => (dispatch) => {
    dispatch(SingleProductGetPending())
    axios.get(`http://localhost:3200/product/${id}`)
        .then((res) => {

            dispatch(SingleProductGetSuccees(res.data))
        }).catch((err) => {
            dispatch(SingleProductGetFailure())
        })

}

