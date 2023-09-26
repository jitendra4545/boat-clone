


const express = require('express')
const { UserModel } = require('../model/UserModel')
const { ProductModel } = require('../model/ProductModel')
const { Authorization } = require('../middleware/auth')
const { NewProductModel } = require('../model/LatestProducts')

const AdminRouter = express.Router()


AdminRouter.get("/", (req, res) => {
    res.send("Welcome To Admin")
})

AdminRouter.delete("/user/:id",Authorization, async(req, res) => {
    let id=req.params.id
    console.log(id)
    try {
         await UserModel.findOneAndDelete({_id:id})
         res.send({ "msg": "User has been deleted"})
    } catch (err) {
        res.send({ "msg": "somthing went wrong! cannot delete", "error": err.message })
    }
})


AdminRouter.post("/product/add",Authorization,async(req,res)=>{
      let data=req.body
    try{
       let newData=new NewProductModel(data)
       await newData.save()
       res.send({"msg":"Product Added Successfully"})
    }catch(err){
        res.send({ "msg": "somthing went wrong! cannot add", "error": err.message })
    }

})


AdminRouter.patch("/product/:id",Authorization,async(req,res)=>{
    let data=req.body
    let id=req.params.id
  try{
     await NewProductModel.findByIdAndUpdate({_id:id},data)
     res.send({"msg":"Product Added Successfully"})
  }catch(err){
      res.send({ "msg": "somthing went wrong! cannot add", "error": err.message })
  }

})


AdminRouter.delete("/product/:id",Authorization,async(req,res)=>{
        let id=req.params.id 
        console.log("dsjhdf",id) 
    try {
      let upData=  await NewProductModel.findOneAndDelete({_id:id})
        res.send({ "msg": "Product has been deleted","data":upData})
   } catch (err) {
       res.send({ "msg": "somthing went wrong! cannot delete", "error": err.message })
   }
})


module.exports = {
    AdminRouter
}

