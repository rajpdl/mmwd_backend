const mongoose = require('./../config/conn');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        minLength: 4
    },
    password: {
        type: String,
        required: true,
        minLength: 4
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    editedAt: {
        type: Date,
        default: Date.now()
    }
});

const User = new mongoose.model('User', UserSchema);

module.exports = {
    User
}