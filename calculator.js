// function math(operator) {
//     let a = parseFloat(document.getElementById("firstNum").value);
//     let b = parseFloat(document.getElementById("secondNum").value);
//     let c;
//     switch (operator) {
//         case '+':
//             c=a+b;
//             document.getElementById("result").innerHTML = c;
//             break;
//         case '-':
//             c=a-b;
//             document.getElementById("result").innerHTML = c;
//             break;
//         case '*':
//             c=a*b;
//             document.getElementById("result").innerHTML = c;
//             break;
//         case '/':
//             c=a/b;
//             document.getElementById("result").innerHTML = c;
//             break;
//     }
// }

document.getElementById("screen").innerHTML = "";
let trigger = false;
function addData(data) {
    if (trigger) document.getElementById("screen").innerHTML = "";
    switch (data) {
        case "1":
            document.getElementById("screen").innerHTML += "1";
            break;
        case "2":
            document.getElementById("screen").innerHTML += "2";
            break;
        case "3":
            document.getElementById("screen").innerHTML += "3";
            break;
        case "4":
            document.getElementById("screen").innerHTML += "4";
            break;
        case "5":
            document.getElementById("screen").innerHTML += "5";
            break;
        case "6":
            document.getElementById("screen").innerHTML += "6";
            break;
        case "7":
            document.getElementById("screen").innerHTML += "7";
            break;
        case "8":
            document.getElementById("screen").innerHTML += "8";
            break;
        case "9":
            document.getElementById("screen").innerHTML += "9";
            break;
        case "0":
            document.getElementById("screen").innerHTML += "0";
            break;
        case "+":
            document.getElementById("screen").innerHTML += "+";
            break;
        case "-":
            document.getElementById("screen").innerHTML += "-";
            break;
        case "*":
            document.getElementById("screen").innerHTML += "*";
            break;
        case "/":
            document.getElementById("screen").innerHTML += "/";
            break;
        case "C":
            document.getElementById("screen").innerHTML = "";
            break;
        case "=":
            trigger = true;
            document.getElementById("screen").innerHTML = eval(document.getElementById("screen").innerHTML);
            break;
    }
}