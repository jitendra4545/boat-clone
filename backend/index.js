const express = require('express')
const { connection } = require('./config/db')
const { UserRouter } = require('./routes/UserRoute')
const app = express()
app.use(express.json())
require('dotenv').config()
app.use("/user",UserRouter)



app.get('/',(req,res)=>{
res.send(`Welcome to boat LifeStyle`)
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
