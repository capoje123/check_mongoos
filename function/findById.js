const Person=require('../Model/personModel')

const findUserByid= async(id)=>{
try {
    const user=await Person.findById(id)
    console.log(user)
} catch (error) {
    console.log(error)
    
}
}
module.exports=findUserByid