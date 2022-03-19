const router = require("express").Router();
//contoller
const {createUser,login} = require('../controller/user')
const checkAuth = require("../middleware/auth");

//help token
const store = require("store2");

const checkLogout = (req,res,next)=>{
  if(req.user){
      //  console.log(req.user);
      return next();
  }else{
    return res.json({msg:'error',command:"Attem to sign out fial."});
  }
}
const checkLogin = (req,res,next)=>{
    if(!req.user){
      return next();
    }else{
      return res.json({msg:'error',command:"You cannot sign in again. Please sign out before sign in again."});
    }
}
const checkRegister = (req,res,next)=>{
  if(!req.user){
    return next();
  }else{
    return res.json({msg:'error',command:"You cannot register a user."});
  }
}
const checkHomepage= (req,res,next)=>{
  if(req.user){
    return next();
  }else{
    return res.json({msg:"error",command:"You cannot go to home page. PLease log in."});
  }
}

router.post('/login',checkAuth,checkLogin,login);
router.post('/register',checkAuth,checkRegister,createUser);
router.get('/logout',checkAuth,checkLogout, (req, res) => {
  store.clear();
  res.status(200).json({msg:'logout success'}) 
});
router.get('/',checkAuth,checkHomepage, (req, res) => {
  res.status(200).json({msg:'success',comment:'Hello home page.'})
});


module.exports = router;
