const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/Todo_list-db');

const db=mongoose.connection;
db.on('error',console.error.bind(console,'error connecting to db'));
db.once('open',function(){
    console.log('successfully connect to database');
})