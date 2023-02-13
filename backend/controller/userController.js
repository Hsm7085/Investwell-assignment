const services=require('../services/userservices');
const {connection}=require('../connection/db');

//GET
const getAllData=(req,res)=>{
   const result=services.getAllData(function(err,result){
    return res.send(result);
   });
   return result;
 };

 //INSERT
 const insertData=(req, res)=>{
    const res1=services.insertData(req.body);
    return res1;
};

//DELETE
const deleteData=(req, res)=>{
   const res1=services.deleteData(req.body);
   return res1;
}

//UPDATE
const updateData=(req, res)=>{
    const res1=services.updateData(req.body);
    console.log("Done");
    return res1;
 }


 module.exports={getAllData,insertData,deleteData,updateData};