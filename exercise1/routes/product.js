const router = require("express").Router();


const {
  create,
  getPro,
  deleted,
  update
} = require("../controller/product");


router.get("/",getPro);
router.post("/create",create);
router.post("/delete/:id",deleted);
router.post("/edit/:id",update);


module.exports = router;
