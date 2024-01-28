const mongoose = require('mongoose')
const UserShema = new mongoose.Schema({
    name : String,
    age : Number,
    email : String
})
const Usermodel = mongoose.model('user1',UserShema)
module.exports = Usermodel