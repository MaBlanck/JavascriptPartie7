function multiply(a, b){
    return a * b;
}
let a = document.getElementById('firstNumber');
let b = document.getElementById('secondNumber');
document.querySelector('button').addEventListener('click', () =>{
    let a = document.getElementById('firstNumber');
    let b = document.getElementById('secondNumber');
    multiply(a.value, b.value)
    console.log(multiply(a.value, b.value));
});
