const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin:Aadarsh77@cluster0.96ecb.mongodb.net/todoApp");

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

const todo = mongoose.model("Todos", todoSchema);

module.exports = {
    todo
}