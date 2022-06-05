const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
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
    ], validate: {validator : val =>  /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
        message:"Please enter a valid email address"}},
    password:{
        type: String,
        required: [true,
        'Password name is Required'
    ], minlength:[8, "Password must be 8 characters or longer"]},
    
    }, {timestamps: true});

    UserSchema.virtual('confirmPassword')
        .get(() => this._confirmPassword)
        .set(value => this._confirmPassword = value) ;

    UserSchema.pre('validate', function(next){
        if (this.password !== this._confirmPassword){
            this.invalidate('confirmPassword', 'Password must match confirm password')
        }
        next();
    UserSchema.pre('save', function(next){
        bcrypt.hash(this.password, 10)
            .then(hash => {
                this.password = hash;
                next();
            });
    });
    
    });
module.exports = mongoose.model('User', UserSchema);