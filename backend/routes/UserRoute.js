const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const { UserModel } = require('../model/UserModel')
const UserRouter = express.Router()


UserRouter.get("/", (req, res) => {
    res.send('UserPage')
})

UserRouter.post("/register", async (req, res) => {
    let data = req.body
    console.log(data)
    let {password}=data
    try {

        bcrypt.hash(data.password, 8, async function (err, hash) {
            if (err) {
                res.send({ "msg": "somthing went wrong! Unable to hash password", "error": err.message })
            } else {
                let newData = new UserModel({...data,password:hash})
                console.log(newData)
                await newData.save()
                res.send({ "msg": "You have been registered successfully" })
            
            }
        });
    } catch (err) {
        res.send({ "msg": "somthing went wrong! cannot register", "error": err.message })
    }
})



UserRouter.post("/login", async (req, res) => {
    let data = req.body
    console.log(data)
    try {
         let SingleData=await UserModel.findOne({email:data.email})
if(SingleData){
    bcrypt.compare(data.password,SingleData.password, async function(err, result) {
   if(result){
    let token = jwt.sign({ UserId:SingleData._id}, 'BOAT');
    await UserModel.findByIdAndUpdate({_id:SingleData._id},{isActive:true})
    res.send({"msg":"Login Successfull","token":token})
   }else{
    console.log("unable to generate token")
   }
    });
}
        } catch (err) {
            res.send({ "msg": "somthing went wrong! cannot login", "error": err.message })
    }
})








module.exports = {
    UserRouter
}


