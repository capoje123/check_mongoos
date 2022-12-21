const Person=require('../Model/personModel')

const deleteMany=async(name)=>{
    try {
        await Person.deleteMany({name:name})
        console.log('deleted many')
    } catch (error) {
        console.log(error)
        
    }
}
module.exports=deleteMany