
const mongoose=require(`mongoose`)


const UserSchema=mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    mobile:{type:Number,required:true},
    password:{type:String,require:true},
    confirm_password:{type:String,require:true}
})

const UserModel=mongoose.model("boat_user",UserSchema)

module.exports={
    UserModel
}
