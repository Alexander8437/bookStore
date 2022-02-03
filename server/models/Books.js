const mongoose = require("mongoose")



const BooksSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    publisher: {
        type: String,
        required: true,
    },
    released: {
        type: Date,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    edition: {
        type: String,
        required: true,
    },
    award: {
        type: String,
        required: false,
    },
    booktype: {
        type: String,
        required: true,
    },
    about: {
        type: String,
        required: true,
    }
});

const BooksModel = mongoose.model("books", BooksSchema)
module.exports = BooksModel;