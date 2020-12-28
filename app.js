var inputBox=document.querySelector("#inputDate");
var btn=document.querySelector("#btnCheck");
var output=document.querySelector("#output");
var wrongInput=document.querySelector("#inputWrong");

function checkformat(date){
    var regEx=/^[1-9]\d{3}$/
    if(date==""){
       wrongInput.innerText="enter year"
       return false;
    }
    else if(isNaN(date)){
        wrongInput.innerText="enter year in number"
        return false;
    }
    else if(!(regEx.test(date))){
        wrongInput.innerText="enter year in correct format"
        return false;
    }
    else{
        return true;
    }
}

function checkLeapYear(date){
    if((date%4==0&&date%100!=0)||date%400==0){
        return true
    }
    else{
        return false;
    }
}

btn.addEventListener("click",function learYear(){
    if(checkformat(inputBox.value)){
        if(checkLeapYear(inputBox.value)){
          output.innerText="leap year"
        }
        else{
            output.innerText="non leap year"
        }
    }
})