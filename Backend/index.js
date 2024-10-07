const express = require("express");
const {createTodo, updateTodo} = require("./type");
const app = express();

app.use(express.json());

app.post("/todo", function(req, res){
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){  // Early return
        res.status(411).json({
            message: "You sent the wrong inputs"
        });
        return;
    }

    // Put data in mongoDB
});

app.get("/todos", function(req, res){

});


app.put("/completed", function(req, res){
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            message: "You sent wrong inputs"
        });
        return;
    }

    // Update database
});

app.listen(3000);
console.log("App is running on port : 3000")