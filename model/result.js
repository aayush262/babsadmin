const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const resultSchema = new Schema({
    data:{
        type: Object,
        required: true
    },
    class: {
        type: String,
        required: true
    },
    Roll: {
        type: Number,
        required: true
    }
   
})

const ResultModel = Mongoose.model('result',resultSchema);

module.exports= ResultModel