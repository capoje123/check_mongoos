const Person=require('../Model/personModel')

const findUser= async(name)=>{
try {
    const user=await Person.find({name:name})
    console.log(user)
} catch (error) {
    console.log(error)
    
}
}
module.exports=findUser