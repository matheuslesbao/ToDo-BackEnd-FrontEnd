const mongoose = require('mongoose');

const anotaçãoDataSchema = new mongoose.Schema({
    title: String,
    notes: String,
    priority: Boolean
});

module.exports = mongoose.model('annotations', anotaçãoDataSchema);