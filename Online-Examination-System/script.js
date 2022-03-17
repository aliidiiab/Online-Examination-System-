var regxmail =RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
var regxstring=RegExp(/^[A-Za-z]+$/);
// var regex2email=RegExp(/^[a-zA-Z0-9._%+-]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!aol.com)(?!live.com)(?!outlook.com)[a-zA-Z0-9_-]+.[a-zA-Z0-9-.]{2,61}$/)
var inputEmail;
var inputFname;
var inputLname;
var inputPass;
function setcookie(key,value,date)
{
    document.cookie = key+"="+value+";expires="+date;
}
function getCookie(key){
    var res = "not found";
    var data = document.cookie;
    var arr = data.split("; ");
    arr.forEach(function(el){
      var keyAndValue =  el.split("=");
      if(keyAndValue[0]===key){
          res = keyAndValue[1];
      }

    })
    return res;

}

function checkEmail()
{
    
    inputEmail= document.getElementById("email").value;
    var span = document.getElementById("_span2");
    if(inputEmail === "")
    {
        span.innerHTML = "Required!";
    }
    else if(!regxmail.test(inputEmail))
    {
        span.innerHTML ="Email isn't valid!";
    }
    else
    {
        span.innerHTML ="";
    }
    return inputEmail;
} 
function checkFname() {
    inputFname =document.getElementById("fname").value;
    var span =document.getElementById("_spanname");
    if(inputFname ==="" )
    {
        span.innerHTML = "Required!";
    }
    else if(!regxstring.test(inputFname))
    {
        span.innerHTML ="First name must contain only charachters!";
    }
    else if(isFinite(inputFname))
    {
        span.innerHTML ="First name must contain charachters!";
    }
    else
    {
        span.innerHTML ="";
    }
    return inputFname;

}
function checkLname() {
    inputLname =document.getElementById("lname").value;
    var span =document.getElementById("_span1");
    if(inputLname ==="" )
    {
        span.innerHTML = "Required!";
    }
    else if(!regxstring.test(inputLname))
    {
        span.innerHTML ="Last name must contain only charachters!";
    }
    else if(isFinite(inputLname))
    {
        span.innerHTML ="Last name must contain charachters!";
    }
    else
    {
        span.innerHTML ="";
    }
    return inputLname;
}
function checkPass() {
    inputPass =document.getElementById("psw").value;
    var span =document.getElementById("_span3");
    if(inputPass ==="" )
    {
        span.innerHTML = "Required!";
    }
    else if(inputPass.length < 8)
    {
        span.innerHTML ="Password Must be at least 8 chars";
    }
    else
    {
        span.innerHTML ="";
    }
    return inputPass;
}
function onSubmit(){
    var span = document.getElementById("_span4");
    var _pass=document.getElementById("psw").value;
    var _repeatpass=document.getElementById("psw-repeat").value;
    var _fname=document.getElementById("fname").value;
    var _lname=document.getElementById("lname").value;
    if ( inputEmail ===""  || !regxmail.test(inputEmail) || _pass==="" || _repeatpass ==="" ||inputPass.length < 8) {
        span.innerHTML="Please Recheck Your Data!";
    }
    else{
        span.innerHTML="";
        setcookie("email",inputEmail,new Date());

        if (_pass !== _repeatpass) {
            span.innerHTML="Password not matched!";
        }
        else{
            span.innerHTML="";
            setcookie("password",_pass,new Date());
            setcookie("fname",_fname,new Date());
            setcookie("lname",_lname,new Date());
            window.location.replace("Login.html");
        }
        
    }
   
}
function Open() {
    window.location.replace("Login.html");
}