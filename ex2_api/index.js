const express = require('express');
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const api = require('./routes/index');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({
  origin: '*'
}));

app.use('/api', api);

app.get('/',(req,res)=>{
  res.send("Hello start")
})

app.listen(3001,()=>{
  console.log('Server is running on http://localhost:3001/');
})