const mongoose = require('mongoose');
const { DB_URL } = require('./static_config');

mongoose.connect(DB_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(r => console.log('Successfully connected to mongodb.'))
    .catch(e => console.log('Some error occured in connection with Database.'));

module.exports = mongoose;