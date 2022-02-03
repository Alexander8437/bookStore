
const mongoose = require("mongoose")


const AuthorsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    detail: {
        type: String,
        required: true,
    }
})


const AuthorsModel = mongoose.model("authors", AuthorsSchema)
module.exports = AuthorsModel;