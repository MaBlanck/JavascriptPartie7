(a, b) => a*b
let a = document.getElementById('firstNumber');
let b = document.getElementById('secondNumber');
document.querySelector('button').addEventListener('click', () =>{
    let a = document.getElementById('firstNumber');
    let b = document.getElementById('secondNumber');
    let result = (a.value*b.value);
    console.log(result);
});