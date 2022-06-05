const { useTransition } = require('react');
const User = require('../models/user.models');

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
    login: async(req, res) => {
        const user = await User.findOne({email: req.body.email});

        if (user === null){
            return res.sendStatus(400);
        }
        const correctPassword = await bcrypt.compare(req.body.password, user.password);
        if(!correctPassword){
            return res.sendStatus(400);
        }

        const userToken = jwt.sign({
            id: user._id
        }, process.env.SECRET_KEY);

        res
            .cookie("usertoken", userToken, secret, {
                httpOnly: true
            })
            .json({msg:"success!"});
    },
    register:(req, res)=> {
        User.create(req.body)
        .then(user => {
            const userToken = jwt.sign({
                id : user._id
            }, process.env.SECRET_KEY);
            res
                .cookie("usertoken", userToken, secret,{
                    httpOnly: true
                })
                .json({msg: "success!", user: user});
        })
        .catch(err=> res.json(err));
    },
    logout:(req,res)=> {
        res.clearCookie("usertoken");
        res.sendStatus(200);
    }
}
