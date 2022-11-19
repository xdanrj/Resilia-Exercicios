var temperatura = 0

temperatura = prompt("TEMPERATURA: ");
temperatura = parseFloat(temperatura);

document.write("TEMPERATURA: " + temperatura + "<br>");

if (temperatura >=38){
    document.write("Você está com febre");
}
else{
    document.write("Você não está com febre");
}