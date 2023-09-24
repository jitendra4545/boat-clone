
const mongoose=require('mongoose')

const AddressSchema=mongoose.Schema({
    name:String,
    UserId:String,
    mobile:Number,
    pincode:Number,
   
    address:String,
    city:String,
    state:String,
    landmark:String,
  
},{
    versionKey:false,
    timestamps:true
})



const AddressModel=mongoose.model("address",AddressSchema)


module.exports={
    AddressModel
}