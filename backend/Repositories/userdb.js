const {connection}=require('../connection/db');

//GET
function getAllData(abc,cb){
    let result;

    connection.query(abc,function(err ,res){
            if(err){
                return console.log(err);
            }
            result=res;
            console.log(result);
            return cb(null,result)
            // return result;
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