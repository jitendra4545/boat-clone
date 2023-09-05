
const mongoose=require('mongoose')

const AddressSchema=mongoose.Schema({
    name:String,
    UserId:String,
    mobile:Number,
    pincode:Number,
    locality:String,
    address:String,
    city:String,
    state:String,
    landmark:String,
    alt_mobile:Number,
},{
    versionKey:false,
    timestamps:true
})



const AddressModel=mongoose.model("address",AddressSchema)


module.exports={
    AddressModel
}