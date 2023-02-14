const userdb=require('../Repositories/userdb');
const {connection}=require('../connection/db');

//GET
function getAllData(){
    
    return new Promise(function(resolve){
        const abc='select * from form';
        const result=userdb.getAllData(abc);
                    result.then((data)=>{
                        resolve(data);
                    })
                
    })
//     const result=userdb.getAllData(abc, function(error,res){
//         console.log(res);
//         cb(null,res);
// return result;
//     });
    
}

//INSERT
function insertData(user){
    var name=user.name;
    var lname=user.lname;
    var email=user.email;
    var pass=user.pass;
    var cpass=user.cpass;
    const abc='insert into form (fname,lname,email,password) values("'+name+'","'+lname+'","'+email+'","'+pass+'")';
  const res1=userdb.insertData(abc);
    return;
}

//DELETE
function deleteData(user){
    var email=user.email;
    const abc= `Delete from form where email="${email}" `;
    const res1=userdb.deleteData(abc);
    return;
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

module.exports={getAllData,insertData,deleteData,updateData};