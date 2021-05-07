const mongoose = require('./../config/conn');
const { ObjectId } = require('mongodb');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    name_in_mm: {
        type: String,
        required: true
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
const Category = new mongoose.model('Category', CategorySchema);

module.exports = {
    Category
}