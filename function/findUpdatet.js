const Person =require('../Model/personModel')

const findUpdate=async(name)=>{
try {
    const user =await Person.findOneAndUpdate({name:name},{age:24},{new:true})
    console.log(user)
} catch (error) {
    console.log(error)
}
}
module.exports=findUpdate