/*
ENUNCIADO
Leia quatro valores inteiros A, B, C e D. A seguir, calcule e mostre a diferença do produto de A e B pelo produto de C e D segundo a fórmula: DIFERENCA = (A * B - C * D).

Entrada
O arquivo de entrada contém 4 valores inteiros.

Saída
Imprima a mensagem DIFERENCA com todas as letras maiúsculas, conforme exemplo abaixo, com um espaço em branco antes e depois da igualdade.

Exemplos de Entrada	Exemplos de Saída
5                    DIFERENCA = -26
6
7
8
*/

const a = 5;
const b = 6;
const c = 7;
const d = 8;

const diferenca = (a*b - c*d);

console.log("DIFERENÇA = " + diferenca);