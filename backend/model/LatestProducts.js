

const mongoose=require('mongoose')



const NewProductSchema=mongoose.Schema({
    "priority": String,
    "priority 2": String,
    "priority 3":String,
    "priority 4":String,
    
    
    "category": String,
    "product-item__aspect-ratio href": String,
    "product_item__primary_image": String,
    "product_item__secondary_image": String,
    "product_item_meta__title":String,
    "ml-2": String,
    "price":Number,
    "m-0": String,
    "price2": Number,
    "rating__stars":String,
    "rating__caption":String,
    
    "feature": String,
    "feature2": String,
    "feature3": String,
})




const NewProductModel=mongoose.model("boatnewprod",NewProductSchema)



module.exports={
    NewProductModel
}