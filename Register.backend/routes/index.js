var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/RegisteredUsers')
    .then(() => console.log('Connected to mongoDB...'))
    .catch(err => console.error('Error received: ', err))
const userSchema = new mongoose.Schema({
    fname: String,
    lname: String,
    email: String,
    password: String,
});

router.post('/', (req,res) => {
    console.log(req);
    const result = createUser(req.body)
    res.send(result);

});

async function createUser(data){

    const User = mongoose.model('User', userSchema);
    const user = new User({
        fname: data.fname,
        lname: data.lname,
        email: data.email,
        password: data.password,
    });
    const result = await user.save();
    return result;
}
