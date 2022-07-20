function f1(){
    var name = document.getElementById('full-name').value;
    if(name == ""){
        alert("Please fill your first passenger name")
        return false;
    }
}
function f2(){
    var name = document.getElementById('form-control').value;
    if(name == ""){
        alert("Please fill your second passenger name")
        return false;
    }
}

function f3(){
    var name = document.getElementById('control1').value;
    if(name == ""){
        alert("Please fill your contact name")
        return false;
    }
}
function f4(){
    var name = document.getElementById('email123').value;
    if(name == ""){
        alert("Please fill your email")
        return false;
    }
}
function f5(){
    var name = document.getElementById('mnumber').value;
    if(name.length<10 || name==""){
        alert("Please fill your mobile number")
        return false;
    }
}

