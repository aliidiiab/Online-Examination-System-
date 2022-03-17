var question_area = document.getElementById("textarea");
var flag_area = document.getElementById("flagarea");
var _welcome = document.getElementById("welcome");
var _flag=document.getElementById("flag");
var _submit=document.getElementById("submit");
var _next=document.getElementById("next");

var _fans1=document.getElementById("fans1");
var _fans2=document.getElementById("fans2");
var _fans3=document.getElementById("fans3");
var _fans4=document.getElementById("fans4");

var _resarea=document.getElementById("result");
var _whole_page=document.getElementById("wholepage");

var arr_test=[];
_resarea.style.display="none";
_submit.style.display="none";
_welcome.innerHTML= " Best Wishes <style: style='color: rgb(92, 184, 92);'>"+getCookie("fname")+" "+ getCookie("lname")+"</style>";
var _finished=false;
var index =0;
var Qid=[];
var AnsCorrect=[];
var AnsText=[];
var btns;
var _asnwers=[];
var Q;
var questions=[
    {
        questions: 'What is the Capital of USA ?',
        id:1,
        answers: 
        [
            {
                text:'Washignton',correct:1
            },
            {
                text:'LA',correct:0
            },
            {
                text:'Cairo',correct:0
            },
            {
                text:'Los Angelos',correct:0
            }
        ]
    },
    {
        questions: 'Choose the low level language.',
        id:2,
        answers: 
        [
            {
                text:'Python',correct:0
            },
            {
                text:'Assembly',correct:1
            },
            {
                text:'C#',correct:0
            },
            {
                text:'Ruby',correct:0
            }
        ]
    },
    {
        questions: 'What is 4 + 6 ?',
        id:3,
        answers: 
        [
            {
                text:'40',correct:0
            },
            {
                text:'10',correct:1
            },
            {
                text:'20',correct:0
            },
            {
                text:'46',correct:0
            }
        ]
    },
    {
        questions: "How long Burj-Khalifa's height?",
        id:4,
        answers: 
        [
            {
                text:'400m',correct:0
            },
            {
                text:'10m',correct:0
            },
            {
                text:'828m',correct:1
            },
            {
                text:'2km',correct:0
            }
        ]
    },
    {
        questions: "What is the team name that Salah plays in?",
        id:5,
        answers: 
        [
            {
                text:'Man City',correct:0
            },
            {
                text:'Man United',correct:0
            },
            {
                text:'LiverPool',correct:1
            },
            {
                text:'West-Ham',correct:0
            }
        ]
    }
    
];
var count=1;
var random_arr=questions;
var random_arr =questions.sort(() => Math.random() - .5);
question_area.innerHTML="Q."+count+"-"+random_arr[index].questions ;
_fans1.value =random_arr[index].answers[0].text;
_fans2.value =random_arr[index].answers[1].text;
_fans3.value =random_arr[index].answers[2].text;
_fans4.value =random_arr[index].answers[3].text;

function Next() {
    reset();
    if (index< random_arr.length  ) {
        index++;
        count++;
        if (index === random_arr.length) {
            question_area.innerHTML="Finished";
            _finished =true;
        }
        else
        {
            question_area.innerHTML="Q."+count+"-"+random_arr[index].questions +"<br>";
            _fans1.value =random_arr[index].answers[0].text;
            _fans2.value =random_arr[index].answers[1].text;
            _fans3.value =random_arr[index].answers[2].text;
            _fans4.value =random_arr[index].answers[3].text;
            saveBackground();
        }
        
        
    }
    finished();
}
function Prev() {
   reset();
    if (index < random_arr.length) {
        if (index ===0 ) {
                question_area.innerHTML="Q "+count+"-"+random_arr[index].questions +"<br>";
                _fans1.value =random_arr[index].answers[0].text;
                _fans2.value =random_arr[index].answers[1].text;
                _fans3.value =random_arr[index].answers[2].text;
                _fans4.value =random_arr[index].answers[3].text;
        }
        else
        {
            index--;
            count--;
            question_area.innerHTML="Q "+count+"-"+random_arr[index].questions +"<br>";
            _fans1.value =random_arr[index].answers[0].text;
            _fans2.value =random_arr[index].answers[1].text;
            _fans3.value =random_arr[index].answers[2].text;
            _fans4.value =random_arr[index].answers[3].text;
        }
    }
    else{
        if (index === random_arr.length) {
            index--;
            count--;
            question_area.innerHTML="Q "+count+"-"+random_arr[index].questions +"<br>";
            _fans1.value =random_arr[index].answers[0].text;
            _fans2.value =random_arr[index].answers[1].text;
            _fans3.value =random_arr[index].answers[2].text;
            _fans4.value =random_arr[index].answers[3].text;
        }
    }

    //finshed()
    finished();
    saveBackground();
}
function finished() {

    if (question_area.innerHTML =="Finished") {
        _fans1.style.display="none";
        _fans2.style.display="none";
        _fans3.style.display="none";
        _fans4.style.display="none";
        _flag.style.display="none";
        _next.style.display="none";
        _submit.style.display="inline";
    }
    else
    {
        _fans1.style.display="inline";
        _fans2.style.display="inline";
        _fans3.style.display="inline";
        _fans4.style.display="inline";
        _flag.style.display="inline";
        _next.style.display="inline";
        _submit.style.display="none";
        _resarea.style.display="none";
    }
}
function reset() {
    _fans1.style.background='rgb(2, 117, 216)';
    _fans1.style.color= 'white';
    _fans2.style.background='rgb(2, 117, 216)';
    _fans2.style.color= 'white';
    _fans3.style.background='rgb(2, 117, 216)';
    _fans3.style.color= 'white';
    _fans4.style.background='rgb(2, 117, 216)';
    _fans4.style.color= 'white';
}
function Flag() {
    // reset();
    if (flag_area.children.length ==0) {

        Q = document.createElement("button");
        Q.setAttribute("id",index);
        Q.style.cursor="pointer";
        Q.innerHTML="Q "+(index+1);
        Q.setAttribute("class","flagbtn")
        flag_area.appendChild ( Q );
        arr_test.push(index);
        Q.addEventListener('click',function () {
            
            question_area.innerHTML="Q "+(Number(this.getAttribute("id"))+1)+"-"+random_arr[this.getAttribute("id")].questions +"<br>";
            _fans1.value =random_arr[this.getAttribute("id")].answers[0].text;
            _fans2.value =random_arr[this.getAttribute("id")].answers[1].text;
            _fans3.value =random_arr[this.getAttribute("id")].answers[2].text;
            _fans4.value =random_arr[this.getAttribute("id")].answers[3].text;
            this.remove();
            arr_test.splice(this.getAttribute("id"),1);
            index = Number(this.getAttribute("id"));
            count = (Number(this.getAttribute("id"))+1);
            
            if (finished) {
                _fans1.style.display="inline";
                _fans2.style.display="inline";
                _fans3.style.display="inline";
                _fans4.style.display="inline";
                _flag.style.display="inline";
                _next.style.display="inline";
                _submit.style.display="none";
                _resarea.style.display="none";
            }
            saveBackground();
        })
    }
    else{
        var not_found=false;
        arr_test.forEach(function (e) {
            if (e === index) {
                not_found=true;
            }
        })
        if (!not_found) {
            Q = document.createElement("button");
            Q.setAttribute("id",index);
            Q.style.cursor="pointer";
            Q.innerHTML="Q "+(index+1);
            Q.setAttribute("class","flagbtn");
            flag_area.appendChild ( Q );
            arr_test.push(index);
            Q.addEventListener('click',function () {
                question_area.innerHTML="Q "+(Number(this.getAttribute("id"))+1)+"-"+random_arr[this.getAttribute("id")].questions +"<br>";
                _fans1.value =random_arr[this.getAttribute("id")].answers[0].text;
                _fans2.value =random_arr[this.getAttribute("id")].answers[1].text;
                _fans3.value =random_arr[this.getAttribute("id")].answers[2].text;
                _fans4.value =random_arr[this.getAttribute("id")].answers[3].text;
                this.remove();
                arr_test.splice(this.getAttribute("id"),1);
                index = Number(this.getAttribute("id"));
                count = (Number(this.getAttribute("id"))+1);
                if (finished) {
                    _fans1.style.display="inline";
                    _fans2.style.display="inline";
                    _fans3.style.display="inline";
                    _fans4.style.display="inline";
                    _flag.style.display="inline";
                    _next.style.display="inline";
                    _submit.style.display="none";
                    _resarea.style.display="none";
                }
                saveBackground();
            })
        }

        
    }
    
}
function lastSubmit() {
    var res=0;
    AnsCorrect.forEach(function (e) {
        res = res + e;
    })
    _resarea.style.display="inline";
    _resarea.innerHTML="Yor Result is <style: style='color: rgb(92, 184, 92);'> "+res+" </style>/"+ random_arr.length;
    _whole_page.style.display="none";
    _submit.style.display="none";
}
function saveBackground() {
    btns= document.getElementsByClassName("ans-btn");
    Qid.forEach(function (e) {
        if (e == random_arr[index].id) {

            for (let i = 0; i < btns.length; i++) {

                for(let j=0;j<AnsText.length;j++){
                    
                    if (btns[i].value == AnsText[j] ) {
                    
                        btns[i].style.background='black';
                        btns[i].style.color= 'rgb(2, 117, 216)';
                        
                       } 
                }
              
            }
        }
    })

}
_fans1.addEventListener('click',function ()     {
    _fans1.style.background='black';
    _fans1.style.color= 'rgb(2, 117, 216)';
    
    _fans2.style.background='rgb(2, 117, 216)';
    _fans2.style.color= 'white';

    _fans3.style.background='rgb(2, 117, 216)';
    _fans3.style.color= 'white';

    _fans4.style.background='rgb(2, 117, 216)';
    _fans4.style.color= 'white';

    Qid.forEach(function (e) {
        if ( random_arr[index].id == e) {
            Qid.splice(index, 1);
            AnsText.splice(index,1);
            AnsCorrect.splice(index,1);
        }
        
    })
    Qid.push(random_arr[index].id);
    AnsCorrect.push(random_arr[index].answers[0].correct);
    AnsText.push(random_arr[index].answers[0].text);
})
_fans2.addEventListener('click',function ()     {
    _fans2.style.background='black';
    _fans2.style.color= 'rgb(2, 117, 216)';

    _fans1.style.background='rgb(2, 117, 216)';
    _fans1.style.color= 'white';

    _fans3.style.background='rgb(2, 117, 216)';
    _fans3.style.color= 'white';

    _fans4.style.background='rgb(2, 117, 216)';
    _fans4.style.color= 'white';

    Qid.forEach(function (e) {
        if ( random_arr[index].id == e) {
            Qid.splice(index, 1);
            AnsText.splice(index,1);
            AnsCorrect.splice(index,1);
        }
        
    })
    Qid.push(random_arr[index].id);
    AnsCorrect.push(random_arr[index].answers[1].correct);
    AnsText.push(random_arr[index].answers[1].text);

  
 
})
_fans3.addEventListener('click',function ()     {
    _fans3.style.background='black';
    _fans3.style.color= 'rgb(2, 117, 216)';

    _fans1.style.background='rgb(2, 117, 216)';
    _fans1.style.color= 'white';

    _fans2.style.background='rgb(2, 117, 216)';
    _fans2.style.color= 'white';

    _fans4.style.background='rgb(2, 117, 216)';
    _fans4.style.color= 'white';

    // obj[index].id=random_arr[index].id ;
    // obj[index].correct=random_arr[index].answers[2].correct;
    // obj[index].text=random_arr[index].answers[2].text;
    // _asnwers.push(obj[index]);
    Qid.forEach(function (e) {
        if ( random_arr[index].id == e) {
            Qid.splice(index, 1);
            AnsText.splice(index,1);
            AnsCorrect.splice(index,1);
        }
        
    })
    Qid.push(random_arr[index].id);
    AnsCorrect.push(random_arr[index].answers[2].correct);
    AnsText.push(random_arr[index].answers[2].text);

   
    
})
_fans4.addEventListener('click',function ()     {
    _fans4.style.background='black';
    _fans4.style.color= 'rgb(2, 117, 216)';
    _fans1.style.background='rgb(2, 117, 216)';
    _fans1.style.color= 'white';

    _fans3.style.background='rgb(2, 117, 216)';
    _fans3.style.color= 'white';

    _fans2.style.background='rgb(2, 117, 216)';
    _fans2.style.color= 'white';

    Qid.forEach(function (e) {
        if ( random_arr[index].id == e) {
            Qid.splice(index, 1);
            AnsText.splice(index,1);
            AnsCorrect.splice(index,1);
        }
        
    })
    Qid.push(random_arr[index].id);
    AnsCorrect.push(random_arr[index].answers[3].correct);
    AnsText.push(random_arr[index].answers[3].text);

  
})
////////////////////////////////////// Timer \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// Set the date we're counting down to
var countDownDate = new Date().getTime();
countDownDate += 600000;
// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "Time OUT!";
    _whole_page.style.display="none";
    lastSubmit();
    // _resarea.style.display="inline";
    
  }
  
}, 1000);