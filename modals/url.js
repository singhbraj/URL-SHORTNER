const mongoose = require('mongoose')


const urlSchema = new mongoose.Schema({
    shortId:{
        type:String,
        required:true,
        unique:true,
    },
    redirectURL:{
        type:String,
        required:true
    },
    visitHistory:[{
        timestamp:{
            type:Number
        }
    },
  {timestamp:true}
]
})

const SHORTURL = mongoose.model('shorturl',urlSchema)

module.exports = SHORTURL