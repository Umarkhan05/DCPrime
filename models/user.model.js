const mongoose = require('mongoose');
const schema = mongoose.Schema;


const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required:true
        
    }

})


module.exports = mongoose.model('User', userSchema);

