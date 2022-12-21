const Person=require('../Model/personModel')
const find=async(food)=>{
    try {
        const user= await Person.find({favoriteFoods:{$all:[food]}}).sort({name:1}).limit(2)
        console.log(user)
    } catch (error) {
        console.log(error)
    }
}
module.exports=find