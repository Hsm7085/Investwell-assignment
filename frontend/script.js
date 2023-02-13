
var n=0;
var data=[];
var hash=new Map();
let form=document.getElementById("myform");
form.addEventListener('submit',function(e){
    e.preventDefault();
});
function get(){
    
    console.log("fghj")
    $.ajax({
        url:"http://localhost:3000/show",
        type:"GET",
        success: function(result){
            var tabledata="";
            for( i=0;i<result.length;i++){
                var obj=result[i];
                tabledata+="<tr><td>" + obj.user_id+"<td>" + obj.fname+"</td><td>"+obj.lname+"</td><td>"+obj.email+"</tr>";
                    
            }
            document.getElementById("mytable").innerHTML=tabledata;
            document.getElementById("h").innerHTML=data.length;
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

           if( hash.has(email)){
            alert("This Email already exist");
            return false;
           }
    
    n++;
        data.push({n,name,lname,email,pass});
       
        hash.set(email,pass);

        var table = document.getElementById("mytable");
        var ob=data[0];
        // var tabledata="";
        // for( i=0;i<data.length;i++){
        //     var obj=data[i];
        //     tabledata+="<tr><td>" + obj.n+"<td>" + obj.name+"</td><td>"+obj.lname+"</td><td>"+obj.email+"</tr>";
                
        // }
        // document.getElementById("mytable").innerHTML=tabledata;
        // document.getElementById("h").innerHTML=data.length;

        


        // CALL AJAX
        
            $.ajax({
              url: "http://localhost:3000/ab",
              type: "POST",
              dataType:"json",
            //   data:{name:name,lname: lname,email:email,pass:pass},
            data:ob,
              success: function(result) {
                console.log(result);
                console.log("data saved successfully");
              },
              error: function(error) {
                console.log(error);
              }
            });
          
        

        document.forms.first.name.value="";
        document.forms.first.lname.value="";
        document.forms.first.email.value="";
        document.forms.first.pass.value="";
        document.forms.first.cpass.value="";
    

}

function login(){
    document.getElementById("myform").style.display="none";
    document.getElementById("new").style.display="block";
    document.getElementById("new2").style.display="none";
    document.getElementById("new3").style.display="none";
}
function validate(){
    let email=document.forms.second.email.value;
    let pass=document.forms.second.pass.value;
var result=false;

// if(hash.get(email)==pass){
    //     result=true;
        
    // }

    for(var j=0;j<data.length;j++){
        if((data[j][3]==email) && (data[j][4]==pass)){
            result=true;
            break;
        }
    }



    if(result){
        document.getElementById("new").style.display="none";
        document.getElementById("welcome").style.display="block";
        // document.getElementById("new2").style.display="none"
        document.getElementById("type").innerHTML="Welcome: "+data[j][1]+" "+data[j][2];
    }
    else{
        alert("Please Signup first");
    }

}

