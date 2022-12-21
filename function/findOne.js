const Person=require('../Model/personModel')

const findOne= async(food)=>{
try {
    const user=await Person.findOne({favoriteFoods:{$all:[food]}})
    console.log(user)
} catch (error) {
    console.log(error)
    
}
}
module.exports=findOne