const Author = require('../models/model');

module.exports.findAllAuthors = (req, res) => {
    Author.find()
        .then(findAll => res.json(findAll))
        .catch(err => res.json(err));
}

module.exports.findOneAuthorById = (req,res) => {
    Author.findOne({_id: req.params.id})
        .then(oneAuthor => res.json(oneAuthor))
        .catch(err => res.json(err))
}

module.exports.createNewAuthor = (req,res) => {
    Author.create(req.body)
        .then(newAuthor => res.json(newAuthor))
        .catch(err => res.json(err))
}

module.exports.findOneAuthorAndDelete = (req,res) => {
    Author.deleteOne({_id: req.params.id})
        .then(deleteOneAuthor => res.json(deleteOneAuthor))
        .catch(err => res.json(err))
}

module.exports.findAuthorAndUpdate = (req,res) => {
    Author.findOneAndUpdate({_id: res.params.id}, req.body, {new:true, runValidators:true})
        .then(updateOneAuthor => res.json(updateOneAuthor))
        .catch(err => res.json(err))
}