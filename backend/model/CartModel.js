
const mongoose=require(`mongoose`)
const { NewProductModel } = require("./LatestProducts")


const CartSchema=mongoose.Schema({
    UserId:{type:String},
    qty:{type:Number},
    productID:{type:mongoose.Schema.Types.ObjectId,ref:NewProductModel}

},{
    versionKey:false,
    timestamaps:true
})


const CartModel=mongoose.model("boatcart",CartSchema)


module.exports={
    CartModel
}