
function sumar() {
  var num1 = parseInt(document.getElementById('num1').value);
  var num2 = parseInt(document.getElementById('num2').value);
  var resultado = num1 + num2;
  document.getElementById('resultado').innerText = resultado;
}

function restar() {
  var num1 = parseInt(document.getElementById('num1').value);
  var num2 = parseInt(document.getElementById('num2').value);
  var resultado = num1 - num2;
  document.getElementById('resultado').innerText = resultado;
}

function multiplicar() {
  var num1 = parseInt(document.getElementById('num1').value);
  var num2 = parseInt(document.getElementById('num2').value);
  var resultado = num1 * num2;
  document.getElementById('resultado').innerText = resultado;
}

function dividir() {
  var num1 = parseInt(document.getElementById('num1').value);
  var num2 = parseInt(document.getElementById('num2').value);
  var resultado = num1 / num2;
  document.getElementById('resultado').innerText = resultado;
}

function potencia() {
// ingresa aqui tu codigo.
// ingresa aqui tu codigo.
// ingresa aqui tu codigo. ¡¡¡pista!!!,asi se realizala potencia: Math.pow(num1, num2):
document.getElementById('resultado').innerText=resultado;
}

function raiz(){
    var num1 = parseFloat(document.getElementById('num').value);
    var resultado = Math.sqrt(num1);
    document.getElementById('resultado').innerText =resultado;
}

function modulo(){
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var resultado = num1 % num2;
    document.getElementById('resultado').innerText = resultado;
}

function cleaner(){
    document.getElementById('num1').value="";
    document.getElementById('num2').value="";
    document.getElementById('resultado').innerHTML="";
}










