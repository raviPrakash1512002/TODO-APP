const express=require('express');
const app=express();
const port=4000;


app.use(express.urlencoded());
app.set('view engine','ejs');
app.set('views','./views');

const db=require('./config/mongoose');
const TodoList=require('./models/todo');








app.get('/',(req,res)=>{


    TodoList.find({},(err,tasks)=>{   
        if(err){
            console.log('Error form fetching data from databse');
            return;
        }
        return res.render('home',{
         Todo_list:tasks
         });
     })
 })
 app.post('/',(req,res)=>{

   TodoList.create({
       task:req.body.task,
       category:req.body.category,
       date:req.body.date
   },(err,newTask)=>{
       if(err){
           console.log('error is creating a contact');
           return;
       }
       console.log('--->',newTask);
       return res.redirect('back');
    });
 
 
 });























app.listen(port,(err)=>{
    if(err){
        console.error();
        return;
    }
    console.log('Successful running');
})