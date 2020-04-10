const express = require('express');
const app = express();
const bcrypt = require('bcrypt');

const User = require('../models/user.model');



exports.getuser = function(req, res){
    res.json(User);
}



exports.createuser = async function(req, res){

    try{
        const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        console.log(salt)
        console.log(hashedPassword)
        const user =new User({
            name: req.body.name,
            password: hashedPassword
        })
            
        
        user.save();
    }
    catch{
        res.status(500).send()
    }
   
    

}

exports.login = async function(req, res){
    const user = User.find(user => user.name = req.body.name)
    if(user == null){
        return res.status(400).send('Cannot find user!!')
     }
     try{
       if(await bcrypt.compare(req.body.password, user.password)){
         res.send('login sucessfull!')
         console.log('Login sucessfull')
       }else
       {
           res.send('Not Allowed')
       }
     }
     catch{
         res.status(500).send()
     }
}