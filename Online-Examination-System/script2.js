var regxmail =RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

function checkEmail1()
{
    var span = document.getElementById("_span");
    inputEmail= document.getElementById("email1").value;
    if(inputEmail ==="")
    {
        span.innerHTML = "Required";
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
function Back() {
    window.location.replace("Register.html");
}
function onSubmit2() {
    var span = document.getElementById("_span2");
    var _pass=document.getElementById("psw").value;
    if (inputEmail ===""  || !regxmail.test(inputEmail) || _pass==="") {
        span.innerHTML="Please Recheck Your Data!";
    }
    else{
        span.innerHTML="";
        var email_data = getCookie("email");
        var password_data= getCookie("password");
        if (inputEmail !== email_data || _pass !== password_data) {
            span.innerHTML="Password isn't matched";
        }
        else{
            var _start = document.getElementById("_start");
            span.style.color="green";
            span.innerHTML="Click Start Button to Start Your Exam!";
            _start.style.display="inline";
            

        }
    }
}
function Start() {
    window.open("Exam.html");
    window.close("Login.html");
}