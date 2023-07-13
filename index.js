const express = require('express');
const app = express();
const port = 5000;


const studentRouter = require("./routes/student.routes")
app.use(express.json());

app.listen(port, function () {
    console.log('Example app listeing on port ${port}!')
})

// add a default route
app.get('/', function (req, res) {
    res.send('You have reached the top-level route with a GET');
  })

  

