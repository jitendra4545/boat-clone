const express = require('express')
const cors=require('cors')
const { connection } = require('./config/db')
const { UserRouter } = require('./routes/UserRoute')
const { ProductModel } = require('./model/ProductModel')
const { ProductRouter } = require('./routes/ProductRoute')
const { NewProductModel } = require('./model/LatestProducts')
const { CartModel } = require('./model/CartModel')
const { Authorization } = require('./middleware/auth')
const { AdminRouter } = require('./routes/AdminRoutes')
const app = express()
app.use(express.json())
require('dotenv').config()
app.use(cors())
app.use("/user", UserRouter)
app.use('/product',ProductRouter)
app.use("/admin",AdminRouter)

app.get('/', (req, res) => {
    res.send(`Welcome to boat LifeStyle`)
})

// <----  THE CODE HEPLS TO ADD MULTIPLE PRODUCTS AT ONCE  ---->


app.post('/addmore', async (req, res) => {
let data=req.body
    console.log(data) 
    try {
       let allData=await NewProductModel.insertMany(data)
       
       res.send(allData)
    } catch (err) {
res.send(err)
    }
})

// <----  THE CODE HEPLS TO GET ALL THE CART CART DATA ---->

app.get('/cart', Authorization, async (req, res) => {
    let UserId = req.body.UserId
    console.log("user id", UserId)
    try {
        let cartData = await CartModel.find({UserId:UserId}).populate("productID")
        res.send(cartData)
    } catch (err) {
        res.send({ "msg": "somthing went wrong! cannot get the data", "error": err.message })
        console.log(err)
    }
})


// <----  THE CODE HEPLS TO DELETE  THE CART CART DATA ---->


app.delete("/cart/:id", Authorization, async (req, res) => {
    let ID = req.params.id
    console.log(ID)
    try {
        await CartModel.findOneAndDelete({ _id: ID })
        res.send({ "msg": "Product has been deleted" })
    } catch (err) {
        res.send({ "msg": "somthing went wrong! cannot delete", "error": err.message })
    }

})



app.listen(process.env.port, async () => {
    try {
        await connection
        console.log('DB connected successfully')
    } catch (err) {
        console.log('unable to connect with db',err)
    }
    console.log(`server running on port ${process.env.port}`)
})
