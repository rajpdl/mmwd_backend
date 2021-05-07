const { ObjectId } = require('bson');
const mongoose = require('./../config/conn');
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    title: {
        type: String,
        required: true,
        minLength: 10
    },
    description: {
        type: String,
        required: true,
        minLength: 10
    },
    description_in_mm: {
        type: String,
        required: true,
        minLength: 10
    },
    code: {
        type: String,
        required: true,
        minLength: 10
    },
    categoryId: {
        type: ObjectId,
        ref: 'Category',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    editedAt: {
        type: Date,
        default: Date.now()
    },
    isFeatured: {
        type: Boolean,
        default: false
    }
});
const Article = new mongoose.model('Article', ArticleSchema);

module.exports = {
    Article
}