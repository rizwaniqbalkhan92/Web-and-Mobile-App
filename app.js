
function getNumber(num){
    var result=document.getElementById("result");
    result.value +=num;
}
function resultclear(){
    var result=document.getElementById("result");
    result.value=""
}

function getResult(){
    var result=document.getElementById("result");
    result.value=eval(result.value)
}