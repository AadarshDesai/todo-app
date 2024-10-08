const express = require("express");
const {createTodo, updateTodo} = require("./type");
const {todo} = require("./db");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.post("/todo", async function(req, res){
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){  // Early return
        res.status(411).json({
            message: "You sent the wrong inputs"
        });
        return;
    }

    // Put data in mongoDB
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.json({
        message: "Todo Created!"
    })
});

app.get("/todos", async function(req, res){
    const todos = await todo.find({});
    res.json({
        todos
    })
});


app.put("/completed", async function(req, res){
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            message: "You sent wrong inputs"
        });
        return;
    }

    // Update todo in database
    await todo.updateOne({
        _id: req.body.id
    },{
        completed: true
    })
    res.json({
        message: "Todo marked as completed"
    })

});

app.listen(3000);
console.log("App is running on port : 3000")