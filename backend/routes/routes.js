const usercontroller=require('../controller/userController');
const express=require('express');
const router=express.Router();
const {connection}=require("../connection/db");
var bodyParser=require("body-parser");
const {registervalidate,loginvalidate,deletevalidate,updatevalidate} = require('../validation/validation');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended:true}));

//GET
router.get('/show', usercontroller.getAllData);

//LOGIN
router.post('/login',loginvalidate,usercontroller.loginuser);

//INSERT
router.post('/ab',registervalidate, usercontroller.insertData);

//DELETE
router.post('/del',deletevalidate,usercontroller.deleteData);

//UPDATE
router.post('/upd',updatevalidate,usercontroller.updateData);
  

module.exports=router;