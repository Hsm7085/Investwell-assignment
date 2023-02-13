const db=require('./backend/connection/db');
const routes=require('./backend/routes/routes');


var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var path=require("path");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use("/",routes);
    
var port = 3000;
app.use(express.static(path.join(__dirname,"/frontend")));

app.get('/', function(req, res) {
   
    res.sendFile(__dirname+'/frontend/signup.html'); 
   
});

// app.use((req,res,next)=>{
//     res.setHeader('Access-Control-Allow-Origin','*');
//     res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
//     res.setHeader('Access-Control-Allow-Methods','Content-Type','Authorization');
//     next(); 
// })


app.listen(port);
    console.log('Server started! At http://localhost:' + port);






// TO GET DATA   
// app.get('/show', function(req, res) {
   
//     connection.query(
//         'select * from form',
//         function(err ,results,fields){
//             console.log(results);
//             res.send(results); 
//         }
//     );
//    console.log("user details",req.query);
//     // res.sendFile(__dirname+'/frontend/signup.html'); 
   
// });

// //TO SEND DATA
// app.post('/ab', function(req, res) {
    
//         var name=req.body.name;
//         var lname=req.body.lname;
//         var email=req.body.email;
//         var pass=req.body.pass;
//         var cpass=req.body.cpass;
//         // Validation

//     connection.query(
//             'insert into form (fname,lname,email,password) values("'+name+'","'+lname+'","'+email+'","'+pass+'")',
//             function(err ,results,fields){
//                 // console.log(results);
//                 // res.send(results);
                
//             }
//          );
//         console.log(req.body);
//         res.send(req.body);
//         return;
//     });
    
// // //     app.put('/user/details/update', function(req, res) {
// // //         let userdetails=req.query;
// // //         // console.log('body is ',req.body);
// // //         // res.send(req.body);
// // //         connection.query(
// // //             'update form set password="898989" where fname="Himanshu"',
// // //             function(err ,results,fields){
// // //                 console.log(results);
// // //                 res.send(results);
                
// // //             }
// // //         );
// // //         console.log("user details",req.query)
// // //     });
  
// // //     app.delete('/user/details/delete', function(req, res) {
// // //         let userdetails=req.query;
// // //         // console.log('body is ',req.body);
// // //         // res.send(req.body);
// // //         connection.query(
// // //             'delete from `form` where user_id=2 ',
// // //             function(err ,results,fields){
// // //                 console.log(results);
// // //                 res.send(results);
                
// // //             }
// // //         );
// // //         console.log("user details",req.query)
// // //     });




 










// // // connection.query(
// // //     'select last_name from users',
// // //     function(err ,results,fields){
// // //         console.log(results);
// // //         //console.log(fields);
// // //     }
// // // );
// // // connection.query(
        
// // //     'insert into `form` values(?,?,?,?)',['name','lname','email','password'],
// // //     //'select last_name from users',
// // //     function(err ,results,fields){
// // //         console.log(printed);
// // //         //console.log(fields);
// // //     }
// // // );

// // // connection.query(
// // //     'update `form` set password="121212" where email="hamurya7085@gmail.com" ',
// // //     function(err ,results){
// // //                 console.log(printed);
                
// // //             }
// // // );

// // // connection.query(
// // //     'delete from `form` where user_id=2 ',
// // //     function(err ,results){
// // //                 console.log(printed);
                
// // //             }
// // // );
