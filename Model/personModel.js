const { default: mongoose, model } = require("mongoose");

const personSchema= new mongoose.Schema({
    name: {type:String ,required:true},
age: Number,
favoriteFoods: [String]
});
module.exports=Person=mongoose.model("user",personSchema)