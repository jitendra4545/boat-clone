


const express=require('express')
const { ProductModel } = require('../model/ProductModel')
const { Authorization } = require('../middleware/auth')

const ProductRouter=express.Router()


ProductRouter.get("/",Authorization,async(req,res)=>{
    try{
      let allData=await ProductModel.find()
      res.send(allData)
    }catch(err){
        res.send({ "msg": "somthing went wrong! cannot get the data", "error": err.message })
    }
})


module.exports={
    ProductRouter
}