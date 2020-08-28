const path = require('path');
const express = require('express');
const app = express();

const publicDirectoryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectoryPath));

app.set('view engine', 'hbs'); 

app.get('/', function (req, res) {
  res.render('index',{
      title:"Home",
      name: "Quang"
  });
})

app.get('/about', function (req, res) {
    res.send('<h1>About me</h1>');
  })

app.listen(3000, () => {
    console.log("Port: 3000");
})