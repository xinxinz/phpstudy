function mOver() {
    document.getElementById('shezhi').style.visibility = 'visible'
}

function mOut() {
    document.getElementById('shezhi').style.visibility = 'hidden'
}

function dOver() {
    document.getElementById('more').style.visibility = 'visible'
}

function dOut() {
    document.getElementById('more').style.visibility = 'hidden'
}

function onClick(e) {
    var aa = e.getElementsByTagName("a")[0];
    window.open(aa, "_blank")

}
