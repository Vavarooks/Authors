const Author = require('../controllers/manage.controller');

module.exports = (app) => {
    app.get('/api/author', Author.findAllAuthors);
    app.get('/api/author/add', Author.findAllAuthors);
    app.get('/api/author/:id', Author.findOneAuthorById);
    app.post('/api/author/create', Author.createNewAuthor);
    app.delete('/api/author/:id', Author.findOneAuthorAndDelete);
    app.put('/api/author/update/:id', Author.findAuthorAndUpdate);
}