
const mongoose=require('mongoose')


const ProductSchema=mongoose.Schema({
    title:{type:String},
    description:{type:String},
    price:{type:Number},
    discountPercentage:{type:Number},
    rating:{type:Number},
    stock:{type:Number},
    brand:{type:String},
    category:{type:String},
    thumbnail:{type:String},
    images:{type:Array}
},{
    versionKey:false
})


const ProductModel=mongoose.model("product",ProductSchema)

module.exports={
    ProductModel
}
