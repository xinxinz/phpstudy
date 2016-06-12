function haddle(arr){
    var char, i, key, value;
    var m = new Map();
    //将字符作为key 出现数目作为value 得到map
    for (var i = 0; i < arr.length; i++){
        char = arr[i];
        if(m.has(char)){
            m.set(char, m.get(char)+1);
        }else {
            m.set(char,1);
        }
    }
    char = '';
    value = 0;
    //通过排序得到数目最多的字符
    for(key of m){
        if(value < key[1]){
            value = key[1];
            char = key[0];
        }
    }
    var flag = [];
    //遍历数组，将最多字符的索引放到一个数组中
    for (i = 0; i < arr.length; i++){
        if(arr[i] === char){
            flag.push(i);
        }
    }
    //返回结果
    var result = [arr, char, m.get(char),flag]
    return result;
}

function find() {
    //对输入做限制
    var str = document.getElementById('input').value;
    re = /^[a-z]+$/ //匹配小写字母的正则表达式
    var m = new Map();

    //调用方法返回结果
    if (str.match(re)) {
        var arr = str.trim().split("");
        result = haddle(arr);
        document.getElementById('output').innerHTML = "<br />数组：[" + result[0] + "]" + "<br />字母：" + result[1] + "<br />数量：" + result[2] + "<br />下标：" + result[3];

    } else {
        alert('输入错误，只接收小写英文字符')
    }
}
