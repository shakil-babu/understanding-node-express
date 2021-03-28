
// lets practice
const express = require('express');
const users = require('./users.json');
const app = express();
const cors = require('cors');
app.use(cors());
app.get('/users', (req, res) => {
    res.send(users);
})

// access data with id
app.get('/users/:id', (req, res)=> {
    const id = parseInt(req.params.id);
    const find = users.find((item) => item.id === id);
    res.send(find);
})

// post api
app.post('/addUser', (req, res) => {
    res.send(req.body)
})

app.listen(3000, () => console.log('3000 opening.....'));