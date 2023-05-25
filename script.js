function borrar() {
    document.getElementById('resultado').innerHTML = '0';
}

function numero(number) {
    if (document.getElementById('resultado').innerHTML === "0") {
        document.getElementById('resultado').innerHTML = (number);
    } else {
        document.getElementById('resultado').innerHTML += (number);
    }
}

function punto() {
    if (document.getElementById('resultado').innerHTML.indexOf(".") === -1) {
        document.getElementById('resultado').innerHTML += (".");
    }
}
