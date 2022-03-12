const router = require("express").Router();
//contoller
const {createUser,login} = require('../controller/user')


router.post('/login',login);
router.post('/register',createUser);


module.exports = router;
