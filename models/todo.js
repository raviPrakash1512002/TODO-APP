const mongoose=require('mongoose');
  

const todoSchema=new mongoose.Schema({
    task:{
        type:String,
        required:true
    },
    category:{
        type:String,
    },
    date:{
        type:Date,
        default:Date.now,
        required:true
    }

})
const TodoList=mongoose.model('TodoList',todoSchema);
module.exports=TodoList;