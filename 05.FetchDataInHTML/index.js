const express = require('express')
var cors = require('cors')
const app = express();
app.use(cors())
// emloyees data
const emp = [
    {name:'Shakil Babu', position:'Junior Software Developer', stack:'MERN',id:1 },
    {name:'Fahim Morshed', position:"Sr. Developer", stack:'MEAN', id:2 },
    {name:'Arafat Hossain', position:'Junior Software Developer', stack:'Android', id:3 },
    {name:'Torikus Sadik Raihan', position:'Games developer', stack:'Games Development', id:4 },
    {name:'Shakil Haque', position:'Sr. Developer ', stack:'Embeded Software Development', id:5 },
    {name:'Tarek Rahman', position:'Hardware Maker', stack:'Hardware Engineer', id:6 },
    {name:'Karthik Chanra', position:'Sofware developer', stack:'MEVN', id:7 }
]

// get data wuth all users
app.get('/users', (req,res) => {
    res.send(emp);
})

// access data with id
app.get('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const arr = emp.find((item) => item.id === id);
    res.send(arr);
})

app.listen(4000, () => console.log('4000 localhost is opening....'))