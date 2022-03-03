const router = require("express").Router();

const { json } = require("body-parser");
const {readUser,writeUSer} = require("../db/db");


router.get('/',(req,res)=>{
   const user = readUser();
  //  console.log(user);
   res.status(200).json({message:'success',user:user});
});
router.post('/login', async (req,res)=>{
  
  //read from form 
  const {username,password} = req.query;
  console.log(username,password);
  //read user
  const users = await readUser();
  let notExit = 0;
  //check user 
  for(var i in users){
    //check user or email
    if(users[i].username== username || users[i].email == username){
      //check password
      notExit=1;
      if(users[i].password==password){
        res.status(200).json({message:'true',command:'Login success'});
        break;
      }
      else{
        res.json({message:'false',command:'Password is incorrect...!'});
        break;
      }
    }
  } 
  if(notExit==0){
     res.json({message:'false',command:'User is not exist...!'});
  }
});
router.post('/register',async (req,res)=>{
  const {email,username,firstname,lastname,password} = req.query;

  if(!email || !username ||  !password ||  !firstname  || !lastname ){
    res.json({message:'false',command:'Please input your all information...!'});
  }else{
    var users = readUser();
    var addStatus = 1;
  
    //check exist email or username
    for(var i in users){
      //if exist
      if(users[i].username==username || users[i].email == email){
           addStatus = 0;
           res.json({message:'false',command:'User is exist.PLease change email and username...!'});
      }
    }
    // create new user
    if(addStatus==1){
      var newUser = {  
          "email": email,
          "username":username,
          "firstname":firstname,
          "lastname":lastname,
          "password":password
      };
      //append new user
      users.push(newUser);
      //write to db.json
      await writeUSer(users);
      //return
      res.json({message:'true',command:'Create success'})
    }
   
  }
  
  

});


module.exports = router;
