const User = require('../model/user');

const createUser = async (req, res) => {
  

  const username = req.body.username;
  try {
    const userExist = await User.findOne({ username: username})
    if(userExist){
        res.status(400).json({msg:'success',command:'Username is already exits'});
    }else{

      const user = new User({
        username: req.body.username,
        password:req.body.password,
        email:req.body.email,
        firstname:req.body.firstname,
        lastname:req.body.lastname
      });
     
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
  
  const { username,password } = req.body;
  var nameFind = username;

  try {
    const user = await User.findOne({ username: nameFind})
    if(user){
      var info = user;
      if(info.password==password){
        res.status(200).json({msg:'success',user});
      }else{
        res.status(400).json({msg:'success',command:'wrong password'});
      }
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }

} 


module.exports = {
  createUser,
  login
}

