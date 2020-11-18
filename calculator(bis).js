
const decimal = document.getElementById("decimal");
const clear = document.getElementById("clear");
const outputElement = document.getElementById("display__numbers");
const btnNumbers = document.getElementsByClassName("number");
const btnOperators = document.getElementsByClassName("operator");


let output = '0';
let input;  
let arr = []; 
let equals = false
  

updateoutput = (e) => {
    let btnText = e.target.innerText;
    if(output === "0") { 
      output = ""; 
    }

    output += btnText; 
    outputElement.innerText = output;
} 

function safeEval(str){
    return Function('return ' + str)()
  }

// Oerations
performOperation = (e) => {
  let operator = e.target.innerText;  
  
    switch (operator) {
        case '+':
            input = output;
            output = '0';
            outputElement.innerText = output;
            arr.push(input);
            arr.push('+');
            break;
        case '-':
            input = output;
            output = '0';
            outputElement.innerText = output;
            arr.push(input);
            arr.push('-');
            break;
        case '×':
            input = output;
            output = '0';
            outputElement.innerText = output;
            arr.push(input);
            arr.push('*');
            break;
        case '%':
            input = output;
            output = '0';
            outputElement.innerText = output;
            arr.push(input);
            arr.push('%');
            break;
        case '÷':
            input = output;
            output = '0';
            outputElement.innerText = output;
            arr.push(input);
            arr.push('/');
            break;
        case '=':
            case '=':
            input.addEventListener = outputElement.innerText + '=' + safeEval(output)
        default:
            break;
    }
}


for (let i = 0; i < btnNumbers.length; i++) {
    btnNumbers[i].addEventListener('click', updateoutput) 
}

for (let i = 0; i < btnOperators.length; i++) {
    btnOperators[i].addEventListener('click', performOperation);
}


clear.onclick = () => {
    output = '0';
    input = undefined;
    arr = [];
    outputElement.innerHTML = output;
}


decimal.onclick = () => { 
    if(!output.includes('.')) {
        output += '.';
    }
    outputElement.innerText = output;
}
