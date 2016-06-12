function transform(){
    document.getElementById('level').innerHTML = '';
    var value = document.getElementById('score').value;
//            输入为空或多个空格的处理
    if(value.trim().replace(" ","").length === 0){
        //alert('输入分数不能为空');
        document.getElementById('info').innerHTML = '';
        document.getElementById('level').value = '';
    }else{
        score = Number(value);
        var level;
//                对score做0~100的范围控制&value不是number时返回NaN
        if(score > 100 || score < 0 || isNaN(score)) {
            document.getElementById('info').innerHTML = '输入的分数有误,请输入0~100之间的数字';
        }else if (score === 100){
//                    如果score=100时用下面的公式导致结果为0
            level = 1;
            document.getElementById('level').value = level;
            document.getElementById('info').innerHTML = '';
        }
        else{
            level = 10 - Math.floor(score/10);
            document.getElementById('level').value = level;
            document.getElementById('info').innerHTML = '';
        }
    }
}
