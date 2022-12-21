const Person=require('../Model/personModel')

const updateUser=async(id,food)=>{
    try {
        const user=await  Person.findById(id)
        user.favoriteFoods.push(food)
        user.save()
        console.log("updated")
    } catch (error) {
        console.log(error)
    }

}
module.exports=updateUser