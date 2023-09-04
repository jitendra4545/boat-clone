
const mongoose=require(`mongoose`)


const UserSchema=mongoose.Schema({
    f_name:{type:String,required:true},
    l_name:{type:String,required:true},
    email:{type:String,required:true,unique: true},
    mobile:{type:Number,required:true},
    password:{type:String,require:true},
    isActive:{type:Boolean}
},{
    versionKey:false,
    timestamps:true
})

const UserModel=mongoose.model("boatuser",UserSchema)

module.exports={
    UserModel
}
