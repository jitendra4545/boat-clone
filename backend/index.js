const express = require('express')
const { connection } = require('./config/db')
const { UserRouter } = require('./routes/UserRoute')
const { ProductModel } = require('./model/ProductModel')
const { ProductRouter } = require('./routes/ProductRoute')
const app = express()
app.use(express.json())
require('dotenv').config()
app.use("/user", UserRouter)
app.use('/product',ProductRouter)


app.get('/', (req, res) => {
    res.send(`Welcome to boat LifeStyle`)
})

app.post('/addmore', async (req, res) => {
let data=req.body
    console.log(data)
    try {
       let allData=await ProductModel.insertMany(data)
       
       res.send(allData)
    } catch (err) {
res.send(err)
    }
})

app.listen(process.env.port, async () => {
    try {
        await connection
        console.log('DB connected successfully')
    } catch (err) {
        console.log('unable to connect with db')
    }
    console.log(`server running on port ${process.env.port}`)
})
