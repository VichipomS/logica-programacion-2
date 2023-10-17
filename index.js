function convertirTemperatura() {
    let temperaturaC;
    let esNumero = false;

    while (!esNumero) {
        let inputUsuario = prompt("Ingrese la temperatura en grados Celsius:");
        temperaturaC = parseFloat(inputUsuario);
        esNumero = !isNaN(temperaturaC);

        if (!esNumero) {
            console.log("Por favor, ingrese un número válido.");
        }
    }

    let temperaturaF = (temperaturaC * 9/5) + 32;
    let temperaturaK = temperaturaC + 273.15;

    console.log("Grados Kelvin: " + temperaturaK.toFixed(2));
    console.log("Grados Fahrenheit: " + temperaturaF.toFixed(2));
}

convertirTemperatura();
