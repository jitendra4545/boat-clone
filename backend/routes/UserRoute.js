const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const { UserModel } = require('../model/UserModel')
const { Authorization } = require('../middleware/auth')
const { AddressModel } = require('../model/AddressModel')
const UserRouter = express.Router()


UserRouter.get("/", (req, res) => {
    res.send('UserPage')
})

// <----  THE CODE HEPLS TO REGISTER A NEW USER ---->


UserRouter.post("/register", async (req, res) => {
    let data = req.body
    console.log(data)
    let { password } = data
    try {

        bcrypt.hash(data.password, 8, async function (err, hash) {
            if (err) {
                res.send({ "msg": "somthing went wrong! Unable to hash password", "error": err.message })
            } else {
                let newData = new UserModel({ ...data, password: hash })
                console.log(newData)
                await newData.save()
                res.send({ "msg": "You have been registered successfully" })

            }
        });
    } catch (err) {
        res.send({ "msg": "somthing went wrong! cannot register", "error": err.message })
    }
})

// <----  THE CODE HEPLS TO LOGIN USER ---->

UserRouter.post("/login", async (req, res) => {
    let data = req.body
    console.log(data)
    try {
        let SingleData = await UserModel.findOne({ email: data.email })
        console.log(SingleData)
        if (SingleData) {
            bcrypt.compare(data.password, SingleData.password, async function (err, result) {
                if (result) {
                    let token = jwt.sign({ UserId: SingleData._id }, 'BOAT');
                    await UserModel.findByIdAndUpdate({ _id: SingleData._id }, { isActive: true })
                    res.send({ "msg": "Login Successfull", "token": token })
                } else {
                    res.send("unable to generate token")
                }
            });
        } else {
            res.send("Unable to find Data Register first")
        }
    } catch (err) {
        res.send({ "msg": "somthing went wrong! cannot login", "error": err.message })
    }
})





// <----  THE CODE HEPLS TO ALL USERS ---->

UserRouter.get("/alluser",async(req,res)=>{

    try{
let allUser=UserModel.find()
res.send(allUser)
    }catch(err){
        res.send({ "msg": "somthing went wrong! cannot get data", "error": err.message })
    }

})



// <----  THE CODE HEPLS TO LOGOUT USER ---->


UserRouter.patch("/logout", Authorization, async (req, res) => {

    const UserId = req.body.UserId

    try {
        await UserModel.findByIdAndUpdate({ _id: UserId }, { isActive: false })
        res.send({ "msg": "Your account is logged out" })
    } catch (err) {
        res.send({ "msg": "somthing went wrong! cannot logout Account", "error": err.message })
    }


})


// <----  THE CODE HEPLS TO ADD A NEW ADDRESS  ---->


UserRouter.post("/address", Authorization, async (req, res) => {
    let data = req.body
    console.log(data)

    try {
        let address = new AddressModel(data)
        await address.save()
        res.send({ "msg": "Address added to the cart successfully" })
    } catch (err) {
        res.send({ "msg": "somthing went wrong! cannot add the address", "error": err.message })
    }
})


// <----  THE CODE HEPLS TO REMOVE ADDRESS  ---->


UserRouter.delete("/address/:id", Authorization, async (req, res) => {
    const id = req.params.id

    try {
        await AddressModel.delete({ _id: id })
        res.send({ "msg": "Address has been deleted" })
    } catch (err) {
        res.send({ "msg": "somthing went wrong! cannot delete", "error": err.message })
    }
})



// <----  THE CODE HEPLS TO GET ALL ADDRESS  ---->

UserRouter.get("/address", Authorization, async (req, res) => {
    const UserId = req.body.UserId
    console.log(UserId)
    
  try{
     let allAddress=await AddressModel.find({UserId:UserId})
     res.send(allAddress)
  }catch(err){
    res.send({ "msg": "somthing went wrong! cannot get Data", "error": err.message })
  }
})








module.exports = {
    UserRouter
}


