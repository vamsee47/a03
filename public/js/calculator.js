var a, b, result;


function setvalues() {
    a = Number(document.getElementById("a").value)
    b = Number(document.getElementById("b").value);
   

}

function sum(num1, num2) {
  
    if (num1 || num2) {
        return num1 + num2;
    }
    setvalues();
    result = a + b;
          
    
    alert("The Sum is equal to " + result);
}

function Diff(num1, num2) {
  

    if (num1 || num2) {
        return num1 - num2;
    }
    setvalues();
    result = a - b;
    
    alert("The Diff is equal to " + result);
    
}

function mul(num1, num2) {
  
        if (num1 || num2) {
            return num1 * num2;
        }
        setvalues();
        result = a * b;
        
        alert("The multiplication operation is equal to " + result);
      
    }

    function div(num1, num2) {
      
              
            if (num1 || num2) {
                return num1 / num2;
            }
            setvalues();
            result = a / b;
            
            alert("The division operation is equal to " + result);
        }

        function Reset(a, b) {
            setvalues();
            document.getElementById("a").value = "";
            document.getElementById("b").value = "";
        }