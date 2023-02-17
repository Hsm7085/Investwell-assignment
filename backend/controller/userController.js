const services=require('../services/userservices');
const {connection}=require('../connection/db');

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
   
const result=await services.loginuser(req.body);
// res.send(result);
let email=req.body.email;
let pass=req.body.pass;

if(result.length==0){
   res.send("Invalid Credentials");
}
else{
res.send(result);
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
const updateData=(req, res)=>{
    const res1=services.updateData(req.body);
    console.log("Done");
    return res1;
 }


 module.exports={getAllData,insertData,deleteData,updateData,loginuser};