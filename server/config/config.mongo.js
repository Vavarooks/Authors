const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/author',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});