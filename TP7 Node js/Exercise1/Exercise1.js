const express = require('express');
const {readFile} = require('fs');
const app = express()
const port = 3000

app.get('/', (req, res) => {
  readFile('./Exercise1.html','utf8',(err,html)=>{
    if(err){
      res.status(400).json({msg:"errr"});
    }else{
      res.send(html);
    }
  });
})

app.get('/detail', (req, res) => {
  readFile('./Detail.html','utf8',(err,html)=>{
    if(err){
      res.status(400).json({msg:"errr"});
    }else{
      res.send(html);
    }
  });

})


app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})