const userdb=require('../Repositories/userdb');
const {connection}=require('../connection/db');
var cryptojs = require("crypto-js");

//GET
async function getAllData(){
    const abc='select fname,lname,email from form';
    const result= await userdb.getAllData(abc);
    return new Promise(function(resolve){
                    resolve(result);
    })
//     const result=userdb.getAllData(abc, function(error,res){
//         console.log(res);
//         cb(null,res);
// return result;
//     });
    
}

//LOGIN
async function loginuser(user){
    let email=user.email;
    let pass=user.pass;
    const abc=`select * from form where email="${email}"`;
    const result=await userdb.loginuser(abc);
    
    return new Promise(function(resolve){
        resolve(result);
    })
    
}
//DELETE
 async function deleteData(user){
    let email=user.email;
    const abc= `Delete from form where email="${email}" `;
    const res1=await userdb.deleteData(abc);
    return new Promise(function(resolve){
        resolve(res1);
    });
}

//INSERT
async function insertData(user){
    let name=user.name;
    let lname=user.lname;
    let email=user.email;
    let pass=user.pass;
    let ciphertext = cryptojs.AES.encrypt(pass, 'secret key 123').toString();
    const abc='insert into form (fname,lname,email,password) values("'+name+'","'+lname+'","'+email+'","'+ciphertext+'")';
  
  let result;
  try{
    result=await userdb.insertData(abc);
  }  
  catch(err){
    result=err;
  }
  
    return result;
}



//UPDATE
async function updateData(user){
    let userid=user.UserId;
    let name=user.name;
    let lname=user.lname;
    let email=user.email;
    let pass=user.pass;
    let ciphertext = cryptojs.AES.encrypt(pass, 'secret key 123').toString();
    const abc=`update form set fname="${name}",lname="${lname}",email="${email}",password="${ciphertext}" where user_id=${userid}`;
    const res1=await userdb.updateData(abc);
    return new Promise((resolve,reject)=>{
        resolve(res1);
    })
}

module.exports={getAllData,insertData,deleteData,updateData,loginuser};