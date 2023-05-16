const entrada = require('prompt-sync')({sigint: true});

var diametro = entrada('Insira o diâmetro de Círculo que queira saber a Área: ');
var raio = diametro / 2;
var area = 3.14 * Math.pow(raio, 2);
console.log("A área desse círculo é de " + area);
