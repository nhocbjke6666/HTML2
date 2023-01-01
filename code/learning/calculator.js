function sum(){
    let number1 = parseInt(document.getElementById('number1').value);
    let number2 = parseInt(document.getElementById('number2').value);
    let total = number1 + number2;
    document.getElementById('result').value = total;
}