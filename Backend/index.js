const express = require("express");
const {createTodo, updateTodo} = require("./type");
const app = express();

app.use(express.json());

app.get("/todos", function(req, res){

});

app.post("/todo", createTodo, function(req, res){

});

app.put("/completed", updateTodo, function(req, res){

});

app.listen(3000);
console.log("App is running on port : 3000")