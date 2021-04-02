const Mongoose = require('mongoose');


Mongoose.connect(`${process.env.DB_URL}`,{
    useUnifiedTopology: true,
    useNewUrlParser: true
},(err,done)=>{
    if(err){
        console.log('db connection failed ',err);
    }
    else{
        console.log('db connection success');
    }
})