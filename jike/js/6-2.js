var changeColor = document.getElementsByClassName('changeColor');
var changeBorder = document.getElementsByClassName('changeBorder');
var changeBgcolor = document.getElementsByClassName('changeBgcolor');
var color,hoverColor;

window.onload=function(){
    //首先读取localStorage中的颜色
    changeSkin(window.localStorage.getItem('color'),window.localStorage.getItem('hcolor'));
}
function change(key){
    switch(key){
        case 'red':
            color = '#650006';
            hoverColor='#4E0D11';
            break;
        case 'green':
            color = '#0aa770';
            hoverColor='#049A66';
            break;
        case 'yellow':
            color = '#fee20b';
            hoverColor='#9A8907';
            break;
        case 'blue':
            color = '#2f4f9e';
            hoverColor='#20315D';
            break;
        case 'black':
            color = '#000';
            hoverColor='#484545';
            break;
    }
    //changeSkin(color,hoverColor);

}
//遍历更改属性值
function changeSkin(color, hcolor){
    var arrays = changeBgcolor[0].getElementsByTagName('a');
    for(var i = 0; i < changeColor.length; i++){
        changeColor[i].setAttribute('style','color:'+color+' !important');
    }
    for(var i = 0; i < changeBorder.length; i++){
        changeBorder[i].setAttribute('style','border-color:'+color+' !important');
    }
    for(var i = 0; i < changeBgcolor.length; i++){
        changeBgcolor[i].setAttribute('style','background-color:'+color+' !important');
    }
    for(var i = 0; i < arrays.length; i++){
        arrays[i].setAttribute('style', 'background-color:'+color+' !important');
    }
    for(var i = 0; i < arrays.length; i++){
        //arrays[i].setAttribute('style',"a:hover{background-color:"+color+" !important}")
        arrays[i].onmouseover = function(){
            this.style.backgroundColor=hcolor;
        }
        arrays[i].onmouseout = function(){
            this.style.backgroundColor = color;
        }
    }
    //更新localStorage中的颜色
    window.localStorage.setItem('color',color);
    window.localStorage.setItem('hcolor',hcolor);
}

