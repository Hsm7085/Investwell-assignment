const {connection}=require('../connection/db');

//GET
async function getAllData(abc){
    return new Promise(function(resolve){
        connection.query(abc,function(err ,res){
            if(err){
                return console.log(err);
            }
            resolve(res);
          })
          
        }
    )
}

//LOGIN
async function loginuser(abc){
    return new Promise(function(resolve){
        connection.query(abc,function(err,res){
            if(err){
                return console.log(err);
            }
            resolve(res);
        })
    })
}

// INSERT
async function insertData(abc){
    return new Promise(function(resolve,reject){
        connection.query(abc,function(err ,results){
        
            if(err){
                reject(err.message);
            }
            else{
                resolve(results);
            }
            // console.log(results);            
        }
     );
    })

}

//UPDATE
function updateData(abc){
    connection.query(abc,function(err ,results,fields){
            console.log(results);  
                
        }
    );
}

// DELETE
// function deleteData(abc){
//     connection.query(abc,function(err ,results,fields){
//             console.log(results);
//         }
//     );
// }
async function deleteData(abc){
    return new Promise(function(resolve){
        connection.query(abc,function(err,res){
            if(err){
                return console.log(err);
            }
            resolve(res);
        })
    })
}
module.exports={getAllData,insertData,deleteData,updateData,loginuser};