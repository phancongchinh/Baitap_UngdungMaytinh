function add(){
    let a = parseFloat(document.getElementById("firstNum").value);
    let b = parseFloat(document.getElementById("secondNum").value);
    let c = a+b;
    document.getElementById("result").innerHTML = "Result Addition: " + c;
}

function subtract(){
    let a = parseFloat(document.getElementById("firstNum").value);
    let b = parseFloat(document.getElementById("secondNum").value);
    let c = a-b;
    document.getElementById("result").innerHTML = "Result Substraction: " + c;
}

function multiply(){
    let a = parseFloat(document.getElementById("firstNum").value);
    let b = parseFloat(document.getElementById("secondNum").value);
    let c = a*b;
    document.getElementById("result").innerHTML = "Result Multiplication: " + c;
}

function divide(){
    let a = parseFloat(document.getElementById("firstNum").value);
    let b = parseFloat(document.getElementById("secondNum").value);
    let c = a/b;
    document.getElementById("result").innerHTML = "Result Division: " + c;
}