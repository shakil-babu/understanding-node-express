// first create a node.js file command with - yarn init
// second install express.js

const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('I know how to open node...Yay')
})
app.listen(4000, () => console.log("I 4000 is opening.."));