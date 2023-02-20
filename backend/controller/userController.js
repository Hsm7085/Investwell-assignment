const services=require('../services/userservices');
const {connection}=require('../connection/db');
var cryptojs = require("crypto-js");

//GET
const getAllData=async (req,res)=>{
   // console.log(req);
   const result=await services.getAllData();
   //console.log(result);
   //  result.then((data)=>{
   //  res.send(data);
   // });
   res.send(result);
 };

 //LOGIN 
 const loginuser=async(req,res)=>{
   let pass=req.body.pass;
const result=await services.loginuser(req.body);
const bytes  = cryptojs.AES.decrypt(result[0].password, 'secret key 123');
const originalText = bytes.toString(cryptojs.enc.Utf8);
// console.log(result[0].password);
if(result.length==0 || pass!=originalText){
   res.send("Invalid Credentials");
}
else{
  const obj={fname:result[0].fname,lname:result[0].lname,user_id:result[0].user_id};
res.send(obj);
}
 };

 //DELETE
const deleteData=async (req, res)=>{
   const res1=await services.deleteData(req.body);
   if(res1.affectedRows==0){
      res.send("No User Found");
   }
   else{
   res.send(res1);
   }
}


 //INSERT
 const insertData=async(req, res)=>{
       const res1=await services.insertData(req.body);
      //  console.log(res1);
       res.send(res1);
      // return res1;
      //  res.send(res1); 
};


//UPDATE
const updateData=async (req, res)=>{
    const res1= await services.updateData(req.body);
    console.log("Done");
    res.send(res1);
 }


 module.exports={getAllData,insertData,deleteData,updateData,loginuser};