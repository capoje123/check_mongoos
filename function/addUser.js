const Person=require("../Model/personModel")
const addUser =async(name,age,favoriteFoods)=>{
    try {
        const user=new Person({
            name,age,favoriteFoods,
        })
        await user.save()
        console.log('added to db')

    } catch (error) {
        console.log(error)
        
    }
}
module.exports=addUser