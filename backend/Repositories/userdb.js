const {connection}=require('../connection/db');

//GET
function getAllData(abc){
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

// INSERT
function insertData(abc){
return connection.query(abc,function(err ,results,fields){
            console.log(results);            
        }
     );
    console.log(user);
}

//UPDATE
function updateData(abc){
    connection.query(abc,function(err ,results,fields){
            console.log(results);      
        }
    );
}

// DELETE
function deleteData(abc){
    connection.query(abc,function(err ,results,fields){
            console.log(results);
        }
    );
}
module.exports={getAllData,insertData,deleteData,updateData};