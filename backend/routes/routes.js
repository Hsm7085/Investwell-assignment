const usercontroller=require('../controller/userController');
const express=require('express');
const router=express.Router();
const {connection}=require("../connection/db");
var bodyParser=require("body-parser");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended:true}));

//GET
router.get('/show', usercontroller.getAllData);

//INSERT
router.post('/ab', usercontroller.insertData);

//DELETE
router.post('/del',usercontroller.deleteData);

//UPDATE
router.post('/upd',usercontroller.updateData);
  

module.exports=router;