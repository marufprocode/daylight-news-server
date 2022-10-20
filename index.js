const express = require('express')
const app = express();
const port = process.env.PORT || 5000
var cors = require('cors');
app.use(cors());

const categories = require('./Data/Categories.json')

app.get("/", (req, res)=> {
    res.send('Daylight News Server Running');
});

app.get("/news-ctegories", (req, res)=> {
    res.send(categories);
})

app.listen(port, ()=> {
    console.log(`DayLight news server running on port ${port}`);
});



