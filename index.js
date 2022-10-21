const express = require('express')
const app = express();
const port = process.env.PORT || 5000
var cors = require('cors');
app.use(cors());

const categories = require('./Data/Categories.json')
const news = require('./Data/News.json')

app.get("/", (req, res)=> {
    res.send('Daylight News Server Running');
});

app.get("/news-ctegories", (req, res)=> {
    res.send(categories);
});

app.get("/news/:id", (req, res)=> {
    const id = req.params.id;
    const selectedNews = news.find(n => n._id === id);
    res.send(selectedNews);
});

app.get("/category/:id", (req, res)=> {
    const id = req.params.id;
    if (id === '08'){
        res.send(news);
    }else{
        const selectedCategory = news.filter(n => n.category_id === id);
        res.send(selectedCategory);
    }
});


app.listen(port, ()=> {
    console.log(`DayLight news server running on port ${port}`);
});


module.exports = app;


