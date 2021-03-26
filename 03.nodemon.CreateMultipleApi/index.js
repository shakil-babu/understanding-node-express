
// install or add nodemon in your project follow like bellow
// with yarn -> yarn add nodemon
// then, write command to see the output
// -> npx nodemon [app name]


// common module in express
const express = require('express');
const app = express();

// personDetails
const personDetails = [
    {name:'Shakil Babu', department: 'Computer technology', CGPA:4.00 },
    {name:'Torikus Sadik', department:'Electrical technology', CGPA:4.00},
    {name:'Fahim Morshed', department:'Mechanical technology', CGPA:4.00}
]
app.get('/', (req, res) => {
    res.send(personDetails)
})

// deposite names from personDetails array
const names = [];
personDetails.forEach((item) => {
    names.push(item.name);
})

// get person names with name api
app.get('/name', (req, res) => {
    res.send(names);
})
app.listen(4000, console.log('I am opening.........'));

