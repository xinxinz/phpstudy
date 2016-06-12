/**
 * Created by zhangxinxin on 15/12/14.
 */

first =0, second = 0, result = 0, operation=null, flag = false;
//运算函数
function cal(pOne, pTwo, op) {
    if (op === '+') {
        return pOne + pTwo;
    } else if (op === '-') {
        return pOne - pTwo;
    } else if (op === '*') {
        return pOne * pTwo;
    } else if (op === '%'){
        // 对除数为0做判断
        if (pTwo === 0) {
            return null;
        } else {
            return pOne % pTwo;
        }
    }else if (op === "/"){
        // 对除数为0做判断
        if (pTwo === 0) {
            return null;
        } else {
            return pOne / pTwo;
        }
    }else {
        //没有点击运算符，直接点击=时的处理
        return pTwo;

    }
}

//输入逻辑判断
function inputNumber(number){
    //输入时AC==>C
    document.getElementById('reset').innerHTML = 'C';
    var input = document.getElementById('input').value;
    ////输入小数点时
    //if (number === "."){
    //    //输入小数点时，初始化的0不删除
    //    if(input === "0"){
    //        document.getElementById('input').value = input + number;
    //    }else{
    //        //判断小数点出现次数，出现过的话就不予再次输入
    //        if(input.indexOf(".") === -1){
    //            document.getElementById('input').value = input + number;
    //        }
    //    }
    ////输入不包含小数点时
    //}else {
    //    if(input === "0"){
    //        //第一次输入不是小数点，则0去掉
    //        document.getElementById('input').value = number;
    //    }else{
    //        document.getElementById('input').value = input + number;
    //    }
    //}
    if(flag){
        if(number === '.'){
            document.getElementById('input').value = "0"+number;
        }else {
            document.getElementById('input').value = number;
        }
        flag = false;
    }else{
        if (number === "."){
            //输入小数点时，初始化的0不删除
            if(input === "0"){
                document.getElementById('input').value = input + number;
            }else{
                //判断小数点出现次数，出现过的话就不予再次输入
                if(input.indexOf(".") === -1){
                    document.getElementById('input').value = input + number;
                }
            }
        //输入不包含小数点时
        }else {
            if(input === "0"){
                //第一次输入不是小数点，则0去掉
                document.getElementById('input').value = number;
            }else{
                document.getElementById('input').value = input + number;
            }
        }
    }
    //当输入的操作数长度大于10时，字体大小随着输入长度变小
    if(input.length >= 10){
        var size = 200/input.length;
        document.getElementById('input').style.fontSize = size+'pt';

    }else{
        document.getElementById('input').style.fontSize = 24+'pt';
    }
}

//重置方法
function reset() {
    //重置时C==>AC input=>0 fontSize=32px 操作数清零
    document.getElementById('reset').innerHTML = 'AC';
    document.getElementById('input').value = 0;
    document.getElementById('input').style.fontSize = '24pt';
    first = second = result = 0;

}

//正数负数转换
function plusChange(){
    var input = document.getElementById('input').value;
    //0的负数正数均已0显示
    if(input === "0"){
        document.getElementById('input').value= "0";
    }else{
        //第一个字符为-则去掉-，变为正数
        if(input[0] === '-'){
            document.getElementById('input').value = input.substring(1);
        }else{
            //第一个字符不为-，则加-变为负数
            document.getElementById('input').value= '-' + input;
        }
    }
}

//操作符判断
function inputOp(op){
    var input = document.getElementById('input').value;
    //点击操作符时，给第一个操作数赋值 且 input制空
    first = Number(input);
    second += first;
    first = 0;
    operation = op;
    document.getElementById('input').value = "";
}

//计算结果
function getResult(){
    var input = document.getElementById('input').value;
    first = Number(input);
    result = cal(first, second, operation);
    if(result !== null){
        //判断结果的长度，随着长度改变字体大小
        if(result.toString().length >= 10){
            var size = 200/result.toString().length;
            document.getElementById('input').style.fontSize = size+'pt';

        }else{
            document.getElementById('input').style.fontSize = 24+'pt';
        }
        document.getElementById('input').value = result;
        first = second = result = 0;
        flag = true;
    }else{
        //除数为0时，返回null
        document.getElementById('input').value = 'InputError';
    }
}
