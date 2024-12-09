const mongoose = require('mongoose')

const connecDB = async()=>{
    MONGO_URI="mongodb://localhost:27017/Book"
    try{
        await mongoose.connect(MONGO_URI)
        console.log("mongodb connected successfully")
    }
    catch(err){
        console.log('mongodb connection failed')
    }
}

module.exports = connecDB