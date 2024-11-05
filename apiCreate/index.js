const express = require('express');
const app = express();
const PORT = 3000;

let users = [
    {id: 1, name: "Gaurav", email: "1bhrtsnegi@gmail.com"},
    {id: 2, name: "Bheem", email: "bheem@gmail.com"}
];

app.use(express.json());

//Get all users

app.get('/users', (req, res)=>{
    res.json(users);
});

//Get a user by ID

app.get('/user/:id', (req, res) =>{
    const userId = parseInt(req.param.id, 10);
    const user = users.find(u => u.id === userId.id);

    if(!user){
        return res.status(404).send('User Not Found.');
    }

    res.json(user);
});

//create a new user

app.post('/users', (req, res)=>{
    const newUser = {
        id: users.length + 1,
        name: req.body.name,
        email: req.body.email
    };

    users.push(newUser);
    res.status(201).json(newUser);
});

//Update an existing user

app.put('/users/:id', (req,res)=>{
    const userId = parseInt(req.param.id, 10);
    const user = users.find(u => u.id === userId.id);

    if(!user){
        return res.status(404).send('User Not Found');
    }

    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;

    res.json(user);
});

//Delete a user

app.delete('/users/:id', (req, res) =>{
    const userId = parseInt(req.params.id);
    const userIndex = users.findIndex(u => u.id === userId.id);

    if(userIndex == -1){
        return res.status(404).send('User Not Found');
    }

    const deleteUser = users.splice(userIndex, 1);
    res.json(deleteUser);
});

app.listen(PORT, ()=>{
    console.log("Server is running");
    
})
