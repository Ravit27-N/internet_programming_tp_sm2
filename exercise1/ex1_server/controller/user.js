const User = require('../model/user');
//for encrypt
const bcrypt = require('bcryptjs');

//token
const jwt = require("jsonwebtoken");
const store = require('store2');

const createUser = async (req, res) => {
  
  const username = req.query.username;
  try {
    const userExist = await User.findOne({ username: username})
    if(userExist){
        res.status(400).json({msg:'success',command:'Username is already exits'});
    }else{

      //encryp password
      const hashPass = await bcrypt.hash(req.query.password, 12);

      const user = new User({
        username: req.query.username,
        password: hashPass,
        email:req.query.email,
        firstname:req.query.firstname,
        lastname:req.query.lastname
      });
      console.log(user);
      try {
        const newUser = await user.save();
        res.status(201).json({msg:'success', newUser });
      } catch (err) {
        res.status(500).json({msg:'error', message: err.message });
      }
    }
  } catch (err) {
    res.status(500).json({msg:'error', message: err.message });
  }

}

const login = async (req,res)=>{
  
  const { username,password } = req.query;
  // console.log(username,password);
  var nameFind = username;

  try {
    const user = await User.findOne({ username: nameFind})
    if(user){
      var info = user;
      //bcrypt 
      const checkPass = await bcrypt.compare(password, info.password);
      if(checkPass){
        
        const token = await jwt.sign({username},process.env.SECRETE,{ expiresIn: '2h' });
        store.set(process.env.SECRETE,token);
       
        res.status(200).json({msg:'success','token':token});
      }else{
        res.status(400).json({msg:'Error',command:'wrong password'});
      }
    }else{
      res.status(400).json({msg:'Error',command:'User not exists.'});
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
 
} 


module.exports = {
  createUser,
  login
}

