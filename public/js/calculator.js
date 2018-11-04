var a, b, result;


function setvalues() {
    a = Number(document.getElementById("formGroupExampleInput").value)
    b = Number(document.getElementById("formGroupExampleInput2").value);


}

function checkvalidation(){
    let value = document.querySelector('#formGroupExampleInput') ? document.querySelector('#formGroupExampleInput').value: ''
    let value1 = document.querySelector('#formGroupExampleInput2') ? document.querySelector('#formGroupExampleInput2').value: ''
    
    if(value === ""){
        document.querySelector('#formGroupExampleInput') ? document.querySelector('#formGroupExampleInput').setCustomValidity("This field cannot be empty"): ''
        return true
    }
    else if(value1 === ""){
        document.querySelector('#formGroupExampleInput1') ? document.querySelector('#formGroupExampleInput1').setCustomValidity("This field cannot be empty"): ''
        return true
    }
    return false
}


function sum(num1, num2) {

    if (num1 || num2) {
        return num1 + num2;
    }
    else if(checkvalidation()){
       return
    }
   setvalues();
    result = a + b;


    alert("The Sum is equal to " + result);
}

function Diff(num1, num2) {

    if (num1 || num2) {
        return num1 - num2;
    }else if(checkvalidation()){
       return
   }
    setvalues();
    result = a - b;

    alert("The Diff is equal to " + result);

}

function mul(num1, num2) {

    if (num1 || num2) {
        return num1 * num2;
    }
    else if(checkvalidation()){
       return
   }
   setvalues();
    result = a * b;

    alert("The multiplication operation is equal to " + result);

}

function div(num1, num2) {
    if (num1 || num2) {
        return num1 / num2;
    }else if(checkvalidation()){
       return
   }
    setvalues();
    result = a / b;

    alert("The division operation is equal to " + result);
}

function Reset(a, b) {
    setvalues();
    document.getElementById("formGroupExampleInput").value = "";
    document.getElementById("formGroupExampleInput2").value = "";
}