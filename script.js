JAVASCRIPT:

function simularLeituras() {
let temperaturas = [];
for (let i = 1; i <= 5; i++) {
let temp = Number(prompt("Digite a temperatura do sensor " + i + ":"));
temperaturas.push(temp);
}
let alerta = false;
for (let i = 0; i < temperaturas.length; i++) {
if (temperaturas[i] > 30) {
alerta = true;
}
}
let saida = document.getElementById("saida");
if (alerta) {
saida.textContent = "Alerta! Existe sensor acima de 30°C";
} else {
saida.textContent = "Todos os sensores estão em temperatura normal.";
}
}
