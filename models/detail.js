/*
const mongoose = require('mongoose')

const Schema= new mongoose.Schema({

    name:{
        type:String,
        required: true
    },
    tech:{
        type:String,
        required: true
    },
    sub:{
        type: Boolean,
        required: true,
        default: false
    }
})

module.exports = mongoose.model('Detail', Schema)
*/


const mongoose = require('mongoose')

const Schema= new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    article:{
        type: String,
        required: true
    },
    BannerImage:{
       
            data: Buffer,
            type: String
    },
    publishedAt:{
        type: Date,
        required: true,
    }
})

module.exports = mongoose.model('Blog', Schema)


