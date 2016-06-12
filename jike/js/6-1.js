var input, reset; //分别为input和reset两个元素
var resultText = 0; //计算结果
var operation="=", firstDigit = true; //运算符和是否为操作数的第一个数字输入

window.onload = function(){
    input = document.getElementById('input');
    reset = document.getElementById('reset');
}

//计算逻辑
function inputOp(op) {
    var key = Number(input.value);
    switch (operation) {
        case "+":
            resultText += key;
            break;
        case "-":
            resultText -= key;
            break;
        case "*":
            resultText *= key;
            break;
        case "/":
            if (key === 0) {
                resultText = 'error';
            } else {
                resultText /= key;
            }
            break
        case "%":
            if (key === 0) {
                resultText = 'error';
            } else {
                resultText %= key;
            }
            break;
        case "=":
            resultText = key;
            break;
        default :
            break;

    }
    //对于小数位数过多的处理，超过8位，最多位8位
    var k = resultText.toString().indexOf('.');
    if(k != -1 && resultText.toString().substring(k).length >= 8){
        resultText = resultText.toFixed(8);
    }
    input.value = resultText;
    operation = op;
    firstDigit = true;
}

//输入数字的处理逻辑
function inputNumber(key){
    reset.innerHTML = 'C';
    if(firstDigit){
        input.value = key;
    }else {
        if(input.value === '0'){
            input.value = key;
        }
        else {
            input.value = input.value + key;
        }
    }
    firstDigit = false;
}

//正负数转换
function plusChange(){

    input.value = 0 - input.value;
}

//重置方法
function setToZero() {
    //重置时C==>AC input=>0 fontSize=32px 操作数清零
    reset.innerHTML = 'AC';
    input.value = 0;
    resultText = 0;
    operation = "=";
    firstDigit = true;

}

//输入小数点的处理
function inputAdot(){
    if(firstDigit){
        input.value = "0."
    }else {
        if(input.value === "0" || input.value.indexOf(".") === -1){
            input.value = input.value + ".";
        }
    }
    firstDigit = false;
}


