const User = require('../models/user.model.js');


module.exports ={
    createUser: (req,res) => {
        User.create(req.body)
            .then((newUser) => {
                res.json(newUser);
        })
        .catch((err)=> {
            console.log(err);
            res.status(400).json(err);
        })
    },

    getAllUsers :(req, res) => {
            User.find({})
            .then(users => {
                console.log(users);
                res.json(users);
            })
            .catch(err => {
                console.log(err)
                res.status(400).json(err)
            })
    },

    getOneUser:(req,res) => {
            User.findOne({_id: req.params.id})
                .then((oneUser) => res.json(oneUser))
                .catch((err)=> {
                    console.log(err);
                    res.status(400).json(err);
                })
            },

    updateUser:(req,res) => {
            User.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators:true})
                .then(updatedUser =>res.json(updatedUser))
                .catch(err => res.status(400).json(err))
    },

    deleteUser:(req,res)=> {
            console.log(req)
            User.deleteOne({ _id:req.params.id})
                .then(deleteConfirmation => res.json(deleteConfirmation))
                .catch(err => res.status(400).json(err));
    },
}
