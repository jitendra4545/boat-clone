


const express = require('express')
const { ProductModel } = require('../model/ProductModel')
const { Authorization } = require('../middleware/auth')
const { CartModel } = require('../model/CartModel')

const ProductRouter = express.Router()

// <----  THE CODE HEPLS TO REGISTER A NEW USER ---->



ProductRouter.get("/", async (req, res) => {
    try {
        let allData = await ProductModel.find()
        res.send(allData)
    } catch (err) {
        res.send({ "msg": "somthing went wrong! cannot get the data", "error": err.message })
    }
})



// <----  THE CODE HEPLS TO ADD A NEW PRODUCT INTO THE CART ---->

ProductRouter.post(`/add_cart/:id`, Authorization, async (req, res) => {

    let productID = req.params.id


    console.log({ ...req.body, productID, qty: 1 })
    try {

        let cartData = new CartModel({ ...req.body, productID, qty: 1 })
        let newData = await cartData.save()

        res.send({ "msg": "Product added to the cart successfully" })
    } catch (err) {
        res.send({ "msg": "somthing went wrong! cannot add the data", "error": err.message })
    }
})


// <----  THE CODE HEPLS TO GET ALL THE CART CART DATA ---->


ProductRouter.get('/cart', Authorization, async (req, res) => {
    let UserId = req.body.UserId
    console.log("user id", UserId)
    try {
        let cartData = await CartModel.find({ UserId }).populate("productID")
        res.send(cartData)
    } catch (err) {
        res.send({ "msg": "somthing went wrong! cannot get the data", "error": err.message })
    }
})

// <----  THE CODE HEPLS TO UPDATE ALL THE CART CART DATA ---->


ProductRouter.patch("/cart/:id", Authorization, async (req, res) => {
    let ID = req.params.id
    console.log(ID)
    let qty = req.body
    console.log(qty)
    try {
        await CartModel.findOneAndUpdate({ _id: ID }, qty)
        res.send({ "msg": "Product has been updated" })
    } catch (err) {
        res.send({ "msg": "somthing went wrong! cannot update", "error": err.message })
    }
})

// <----  THE CODE HEPLS TO DELETE  THE CART CART DATA ---->


ProductRouter.delete("/cart/:id", Authorization, async (req, res) => {
    let ID = req.params.id
    console.log(ID)
    try {
        await CartModel.findOneAndDelete({ _id: ID })
        res.send({ "msg": "Product has been deleted" })
    } catch (err) {
        res.send({ "msg": "somthing went wrong! cannot delete", "error": err.message })
    }

})

// <----  THE CODE HEPLS TO  EMPTY THE CART CART DATA ---->

ProductRouter.delete("/cart",Authorization,async(req,res)=>{
    let ID = req.body.UserId
    console.log(ID) 
    try{
        await CartModel.deleteMany({UserId:ID})
        res.send({ "msg": "Now Your Cart is empty" })
    }catch(err){
        res.send({ "msg": "somthing went wrong! cannot delete", "error": err.message })
    }
})









module.exports = {
    ProductRouter
}