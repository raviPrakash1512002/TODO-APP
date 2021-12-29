const express=require('express');
const app=express();
const port=4000;

app.set('view engine','ejs');
app.set('views','./views');







app.listen(port,(err)=>{
    if(err){
        console.error();
        return;
    }
    console.log('Successful running');
})