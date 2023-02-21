
var hash=new Map();
let form=document.getElementById("myform");
form.addEventListener('submit',function(e){
    e.preventDefault();
});
var usrid;
var emal;
function get(){
    
    console.log("fghj")
    $.ajax({
        url:"http://localhost:3000/show",
        type:"GET",
        success: function(result){
            var tabledata="";
            for( i=0;i<result.length;i++){
                var obj=result[i];
                tabledata+="<tr><td>" + obj.fname+"</td><td>"+obj.lname+"</td><td>"+obj.email+"</tr>";
                    
            }
            document.getElementById("mytable").innerHTML=tabledata;
            document.getElementById("h").innerHTML=result.length;
            console.log("Hello",result);
        },
        error:function(error){
            console.log(error);
        }
    });
    document.getElementById("tab").style.display="block";
}
function validateForm() {
    document.getElementById("myform").style.display="block";
    document.getElementById("new").style.display="none";
            let name =
                document.forms.first.name.value;   
           let lname =
                document.forms.first.lname.value;
            let email =
                document.forms.first.email.value;
               let pass =
                document.forms.first.pass.value;
                let cpass =
                document.forms.first.cpass.value; 

            var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;  
            var regPhone=/^\d{10}$/;                                        
            var regName = /\d+$/g;                                   

            if (name == "" || regName.test(name)) {
                window.alert("Please enter your name properly.");
                return false;
            }
                
            if (email == "" || !regEmail.test(email)) {
                window.alert("Please enter a valid e-mail address.");
                return false;
            }
              
            if (pass == "") {
                alert("Please enter your password");
                return false;
            }

            if(pass.length <6){
                alert("Password should be atleast 6 character long");
                return false;

            }
            
            if(pass!=cpass){
                alert("Password does not match");
                return false;

            }   
            // for(var i=0;i<data.length;i++){
            //     if(data[i][3]==email){
            //         alert("This Email already exist");
            //         return false;
            //     }

            // }

        //    if( hash.has(email)){
        //     alert("This Email already exist");
        //     return false;
        //    }
        let n=0;
let data=[];
    
    n++;
        data.push({name,lname,email,pass,cpass});
       
        hash.set(email,pass);
        var ob=data[0];

        // CALL AJAX
        
            $.ajax({
              url: "http://localhost:3000/ab",
              type: "POST",
              dataType:"json",
            //   data:{name:name,lname: lname,email:email,pass:pass},
            data:ob,
              success:function(result) {
               console.log("tttttttttttt");
                console.log(result);
                  
              },
              error: function(error) {
                // console.log("jjjjjj");
                err=error.responseText;
                document.getElementById("failed").style.display="block";
                    document.getElementById("failed").innerHTML=err;
                    setTimeout(()=>{
                        document.getElementById("failed").style.display="none";
                    },2500)
                console.log(error.responseText);
              }
            });
          
        document.forms.first.name.value="";
        document.forms.first.lname.value="";
        document.forms.first.email.value="";
        document.forms.first.pass.value="";
        document.forms.first.cpass.value="";
   get();
}


function loginuser(){
   
// if(hash.get(email)==pass){
    //     result=true;
        
    // }
    let email=document.forms.second.email.value;
    let pass=document.forms.second.pass.value;
    let obj={email,pass};
    $.ajax({
        url:"http://localhost:3000/login",
        type:"POST",
        data:obj,
        success: function(result){
           
            if(typeof(result)==="string"){
                alert(result);
               
            }
            else{
                let firstname=result.fname;
                let lastname=result.lname;
                let id=result.user_id;
                document.getElementById("new").style.display="none";
                document.getElementById("welcome").style.display="block";
                document.getElementById("success").style.display="block";
                document.getElementById("upd").style.display="block";
                document.getElementById("rem").style.display="block";
                document.getElementById("type").innerHTML="Welcome "+firstname+" "+lastname+",  UserId:  "+id;
                document.getElementById("logout").innerHTML="Logout";
                usrid=id;
                emal=result.email;
                
                document.getElementById("upi").value=usrid;
                document.getElementById("upe").value=emal;
                document.getElementById("del").value=emal;
                console.log(usrid);
            }
            document.forms.second.email.value="";
                document.forms.second.pass.value="";
            
        },
        error:function(error){
            console.log(error);
        }
    });
   
    
}

function removeUser(){
    let email=document.getElementById("del").value;
    let obj={email}
    console.log("fghj");
    console.log(obj.email);
    $.ajax({
        url:"http://localhost:3000/del",
        type:"POST",
        data:obj,
        success: function(result){
            if(typeof(result)=="string"){
            alert(result);
            }
            // else{
            //     get();
            // }

        },
        error:function(error){
            console.log(error);
        }
    })
    
        document.forms.third.email.value="";
      
       
}
function updateUser(){
    let UserId=document.forms.fourth.UserId.value;
    let name = document.forms.fourth.name.value;   
    let lname = document.forms.fourth.lname.value;
    let email = document.forms.fourth.email.value;
    let pass = document.forms.fourth.pass.value;
    let cpass = document.forms.fourth.cpass.value; 
    console.log("HELLO");
    const obj={UserId,name,lname,email,pass,cpass};

    $.ajax({
        url:"http://localhost:3000/upd",
        type:"POST",
        data:obj,
        success: function(result){
            if(typeof(result)==="string"){
                alert(result);
            }
            console.log("Hello",result);
        },
        error:function(error){
            console.log(error);
        }
    })
        document.forms.fourth.UserId.value="";
        document.forms.fourth.name.value="";
        document.forms.fourth.lname.value="";
        document.forms.fourth.email.value="";
        document.forms.fourth.pass.value="";
        document.forms.fourth.cpass.value="";
        get();
        document.getElementById("upd").style.display="block";
    document.getElementById("rem").style.display="block";
}


