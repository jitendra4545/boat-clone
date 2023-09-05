
const mongoose=require(`mongoose`)


const CartSchema=mongoose.Schema({
    UserId:{type:String,required:true},
    qty:{type:Number,required:true},
    productID:{type:mongoose.Schema.Types.ObjectId,ref:"product"}

},{
    versionKey:false,
    timestamaps:true
})


const CartModel=mongoose.model("cart",CartSchema)


module.exports={
    CartModel
}