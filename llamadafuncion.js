const modulo=require("./calcularIMC.js")


const pesoUsuario = 80;
const alturaUsuario= 1.55;
const imcUsuario = modulo.moduloCalculaIMC(pesoUsuario,alturaUsuario);

//imcUsuario.toFixed(2);

if (imcUsuario < 18.5) 
{
    console.log("el valor del imc es: "+ imcUsuario.toFixed(2)); 
} 
else if (imcUsuario >= 18.5 && imcUsuario <= 24.9) 
{
    console.log("el valor del imc es: "+ imcUsuario.toFixed(2)+" Tu peso es normal.");
} 
else if (imcUsuario >= 25 && imcUsuario <= 29.9)
{
    console.log("el valor del imc es: "+ imcUsuario.toFixed(2) +" Tienes sobrepeso.");  
} 
else 
{
    console.log("el valor del imc es: "+ imcUsuario.toFixed(2) + " Tienes obesidad.");
}
