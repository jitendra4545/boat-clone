
const mongoose=require(`mongoose`)
const { NewProductModel } = require("./LatestProducts")


const CartSchema=mongoose.Schema({
    UserId:{type:String,required:true},
    qty:{type:Number,required:true},
    productID:{type:mongoose.Schema.Types.ObjectId,ref:NewProductModel}

},{
    versionKey:false,
    timestamaps:true
})


const CartModel=mongoose.model("boatcart",CartSchema)


module.exports={
    CartModel
}