const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    publishedDate:{
        type:Date,
        required:true
    },
    catagory:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    updatedAt:{
        type:Date,
    }
})

BookSchema.pre('save',function(next){
    this.updatedAt = Date.now()
    next()
})
const Book = mongoose.model('book',BookSchema)

module.exports = Book