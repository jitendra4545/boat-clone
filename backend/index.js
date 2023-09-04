const express = require('express')
const { connection } = require('./config/db')
const app = express()
require('dotenv').config()

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
