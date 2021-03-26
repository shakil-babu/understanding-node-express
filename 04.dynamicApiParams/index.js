/*
dynamic api like: 'users/:id'
we can easily find out using -> req.params.id
*/

const express = require('express');
const app = express();

const users = [
    {name:'Shakil Babu', work:"React developer", destiny:'JavaScript Engineer', id: 1},
    {name:'Torikus Sadik Raihan', work:"Games developer", destiny:'C++ Engineer', id: 2},
    {name:'Fahim Morshed', work:"Android developer", destiny:'Java Engineer', id: 3},
    {name:'Kolim Uddin', work:"Software developer", destiny:'GoLang Engineer', id:4},
    {name:'Alamin Hossain', work:"Games developer", destiny:'C# Engineer', id: 5},
]

app.get('/users', (req,res) => {
    res.send(users);
})

// users access with id
app.get('/users/:userId', (req, res) => {
    const id = parseInt(req.params.userId);
    const match = users.find((item) => item.id === id);
    res.send(match);
})

app.listen(4000, console.log('i am openning...'))