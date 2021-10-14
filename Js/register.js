function clearFunc()
    {
        document.getElementById("areatext").value="";

        document.getElementById("areaemail").value="";

        document.getElementById("areausername").value="";

        document.getElementById("areapassword").value="";

        document.getElementById("areaconfirmpassword").value="";
        
    }



function tombolregistrasi()
    {


        var letters = /^[A-Za-z]+$/;

        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;



        var name= document.getElementById("areatext").value;


        var email= document.getElementById("areaemail").value;


        var uname= document.getElementById("areausername").value;


        var pwd= document.getElementById("areapassword").value;    
        
        
        var cpwd= document.getElementById("areaconfirmpassword").value;



  
        if (name == '')
        {
            alert('Please Fill Your Name First!');
        }
        else if(!letters.test(name))
        {
            alert('Fill Your Name Without Number Or Special Character!');
        }
        else if (email == '')
        {
            alert('Please Fill Your Valid Email First!');
        }
        else if (!filter.test(email))
        {
            alert('Your Email Is Invalid! (Use Your Account With @)');
        }
        else if( uname == '')
        {
            alert('Please Fill Your Frawlsalla Username First!');
        }
        else if(!letters.test(uname))
        {
            alert('Fill Your Username Without Number Or Special Character!');
        }
        else if( pwd == '')
        {
            alert('Please Fill Your Password First!');
        }
        else if(cpwd == '')
        {
            alert('Please Fill Your Confirm Password First!');
        }
        else if(!pwd_expression.test(pwd))
        {
            alert ('Huruf Besar (A-Z), Huruf Kecil (a-z), Karakter Spesial (!@#$%^&*) Dan Angka (0-9) Dibutuhkan Untuk Password! ');
        }
        else if(pwd != cpwd)
        {
            alert ('Password Should Be Same!');
        }
        else if(document.getElementById("areaconfirmpassword").value.length < 8)
        {
            alert ('Password Should Be 8 Characters or More!');
        }
        else if(document.getElementById("areaconfirmpassword").value.length > 20)
        {
            alert ('Password Maximal Size Is 20 Characters!');
        }
        else
        {                                            
               alert('Your First Frawlsalla Account Is Already Done! Lets Go To The HomePage!');
               window.location = "Home.html"; 
        }
    } 
  