const express = require("express")
const app = express()
const mongoose = require("mongoose");
const UserModel = require("./models/Users");

const cors = require("cors");
const BooksModel = require("./models/Books");
const AuthorsModel = require("./models/Author");

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://Alex:Alexander789@cluster0.882rg.mongodb.net/bookStore?retryWrites=true&w=majority").then(() => {
    console.log("Mongo Connected!")
}).catch((error) => {
    console.log("MongoDB is not connected!");
    console.log(error)
});

app.get("/getUsers", async (req, res) => {
    UserModel.find({}, (err, result) => {
            res.json(result)
    })
});

app.get("/getBooks", async (req, res) => {
    BooksModel.find({}, (err, result) => {
        res.json(result)
    })
})
app.get("/getAuthors", (req, res) => {
    AuthorsModel.find({}, (err, result) => {
        res.json(result)
    })
})


app.post("/createBook", async (req, res) => {
    const book = req.body;
    const newBook = new BooksModel(book);
    await newBook.save();

    res.json(user);
})

app.post("/createUser", async (req, res) => {
    const user = req.body;
    const newUser = new UserModel(user);
    await newUser.save();

    res.json(user);
})

app.listen(3001, () => {
    console.log("Server is running");
})