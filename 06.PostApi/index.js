const experss = require('express');
const cors = require('cors');
const app = experss();
app.use(cors());
app.use(experss.urlencoded({extended:true}));
app.use(experss.json());
app.post('/addUser', (req, res) => {
    res.send(req.body)
})


app.listen(4200, () => console.log('4200 opening....'))