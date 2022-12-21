const Person=require('../Model/personModel')
const addManyUser =async(manyUsers)=>{
    try {
        await Person.create(manyUsers)
        console.log("Users Added")
    } catch (error) {
        console.log(error)
        
    }

}
module.exports=addManyUser;