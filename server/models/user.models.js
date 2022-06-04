const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: [true,
        'First name is Required'
    ], minlength:[2, "First name requires 2 letters"]},
    lastName:{
        type: String,
        required: [true,
        'Last name is Required'
    ], minlength:[2, "Last name requires 2 letters"]},
    email:{
        type: String,
        required: [true,
        'email name is Required'
    ],
    password:{
        type: String,
        required: [true,
        'Password name is Required'
    ], minlength:[8, "Password must be 8 characters or longer"]},
    }
    }, {timestamps: true});

module.exports = mongoose.model('User', UserSchema);