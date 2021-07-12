function math(operator) {
    let a = parseFloat(document.getElementById("firstNum").value);
    let b = parseFloat(document.getElementById("secondNum").value);
    let c;
    switch (operator) {
        case '+':
            c=a+b;
            document.getElementById("result").innerHTML = c;
            break;
        case '-':
            c=a-b;
            document.getElementById("result").innerHTML = c;
            break;
        case '*':
            c=a*b;
            document.getElementById("result").innerHTML = c;
            break;
        case '/':
            c=a/b;
            document.getElementById("result").innerHTML = c;
            break;
    }
}