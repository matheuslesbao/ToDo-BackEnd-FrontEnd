
const mongoose = require ('mongoose');

const dbConfig = 'mongodb+srv://admin:admin@cluster0.dhu8v.mongodb.net/Anotação?retryWrites=true&w=majority';

const connection = mongoose.connect(dbConfig, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = connection;