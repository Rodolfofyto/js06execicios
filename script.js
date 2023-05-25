function borrar() {
    document.getElementById('resultado').innerHTML = '0';
}

function number1() {
    if (document.getElementById('resultado').innerHTML === "0") {
        document.getElementById('resultado').innerHTML = "1";
    } else {
        document.getElementById('resultado').innerHTML += "1";
    }
}
function number2() {
    document.getElementById('resultado').innerHTML = "2";
}

