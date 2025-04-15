function calcularIMC(peso, altura)
 {
    const imc = peso / (altura *altura);
    return imc;
}
const pesoUsuario = 80;
const alturaUsuario= 1.55;
const imcUsuario = calcularIMC(pesoUsuario,alturaUsuario);

//imcUsuario.toFixed(2);

if (imcUsuario < 18.5) {
    console.log("el valor del imc es: "+ imcUsuario.toFixed(2)+" Tienes bajo peso."); 
} else if (imcUsuario >= 18.5 && imcUsuario <= 24.9) {
    console.log("el valor del imc es: "+ imcUsuario.toFixed(2)+" Tu peso es normal.");
} else if (imcUsuario >= 25 && imcUsuario <= 29.9) {
    console.log("el valor del imc es: "+ imcUsuario.toFixed(2) +" Tienes sobrepeso.");
   
} else {
    console.log("el valor del imc es: "+ imcUsuario.toFixed(2) + " Tienes obesidad.");
}
