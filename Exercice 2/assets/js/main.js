function bold (){
    document.querySelector('div').style.fontWeight = 'bold';
}
function color (){
    document.querySelector('div').style.color = 'red';
}
function size (){
    document.querySelector('div').style.fontSize = '20px';
}
document.getElementById('bold').addEventListener('click', bold);
document.getElementById('changeColor').addEventListener('click', color);
document.getElementById('textSize').addEventListener('click', size);
