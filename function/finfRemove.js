const Person=require('../Model/personModel')

const findRemove=async(id)=>{
    try {
        await Person.findByIdAndRemove(id)
        console.log('removed')
    } catch (error) {
        console.log(error)
    }
}
module.exports=findRemove