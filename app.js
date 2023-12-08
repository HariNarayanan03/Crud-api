const express = require('express')
const mongoose= require('mongoose')
require('dotenv').config();
const url = process.env.DB_CONNECTIONSTRING
const app = express()

mongoose.connect(url, {useNewUrlParser:true})

const con=mongoose.connection
con.on('open',()=>{
    console.log('Connected.....')
})

app.use(express.json())
const detailRouter = require('./routers/details')
app.use('/details',detailRouter)


app.listen(9000, ()=>{
    console.log('Server Started')
})