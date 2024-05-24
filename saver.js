const express = require("express")
const app = express()


const foodList = [
    "../img/キャベツ.jpeg",
    "../img/レタス.jpeg",
    "../img/ブロッコリー.jpeg"
];

app.use('/', express.static('/front/dist'));

app.get('/api/foodList', (req, res) => {
	res.json(foodList);
});
app.use('/', express.json());

app.post('/api/foodList', (req, res) => {
    const body = req.body;
    console.log(body)
    res.end();
})

app.listen(3000, ()=> {
    console.log('server is running 3000')
})