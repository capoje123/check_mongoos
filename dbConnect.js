const mongoose = require('mongoose')
async function dbConnect(){
    try {
        await  mongoose.connect(process.env.URI); 
        console.log("db connected")
    } catch (error) {
        console.log(error)
        
    }
}
module.exports=dbConnect;