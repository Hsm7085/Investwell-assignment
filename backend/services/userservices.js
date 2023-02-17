const userdb=require('../Repositories/userdb');
const {connection}=require('../connection/db');

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
    const abc=`select * from form where email="${email}" and password="${pass}"`;
    const result=await userdb.loginuser(abc);
    console.log(result);
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
    var name=user.name;
    var lname=user.lname;
    var email=user.email;
    var pass=user.pass;
    const abc='insert into form (fname,lname,email,password) values("'+name+'","'+lname+'","'+email+'","'+pass+'")';
  
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
function updateData(user){
    var userid=user.UserId;
    var name=user.name;
    var lname=user.lname;
    var email=user.email;
    var pass=user.pass;
    const abc=`update form set fname="${name}",lname="${lname}",email="${email}",password="${pass}" where user_id=${userid}`;
    const res1=userdb.updateData(abc);
    return;
}

module.exports={getAllData,insertData,deleteData,updateData,loginuser};