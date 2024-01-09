const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please provide a name for the task'],
        trim: true,
        maxLength: [20,"Name can't be more than 20 characters"]
    }, completed: 
    {
        type:Boolean,
        default:false
    }
})

module.exports = mongoose.model('Task', taskSchema)
