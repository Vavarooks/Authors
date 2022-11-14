// const { model } = require('mongoose');
const Author = require('../models/author.model');

module.exports.findAllAuthors = (req, res) =>{
    Author.find()
        .then(findAll => res.json(findAll))
        .catch(err => res.json({error: err}))
}

module.exports.findOneAuthorById = (req,res) =>{
    Author.findOne({_id: req.params.id})
        .then(oneAuthor => res.json(oneAuthor))
        .catch(err => res.json({error: err}))
}

module.exports.createNewAuthor = (req,res) =>{
    Author.create(req.body)
        .then(newAuthor => res.json(newAuthor))
        .catch(err => res.json({error: err}))
}

module.exports.findOneAuthorAndDelete = (req,res) =>{
    Author.deleteOne({_id: req.params.id})
        .then(deleteOneItem => res.json(deleteOneItem))
        .catch(err => res.json({error: err}))
}

module.exports.findAuthorAndUpdate = (req,res) =>{
    console.log(req.body);
    Author.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators:true})
        .then(updateOneItem => res.json(updateOneItem))
        .catch(err => res.json({error: err}))
}
