/*
ENUNCIADO
Neste problema, deve-se ler o código de uma peça 1, o número de peças 1, o valor unitário de cada peça 1, o código de uma peça 2, o número de peças 2 e o valor unitário de cada peça 2. Após, calcule e mostre o valor a ser pago.

Entrada
O arquivo de entrada contém duas linhas de dados. Em cada linha haverá 3 valores, respectivamente dois inteiros e um valor com 2 casas decimais.

Saída
A saída deverá ser uma mensagem conforme o exemplo fornecido abaixo, lembrando de deixar um espaço após os dois pontos e um espaço após o "R$". O valor deverá ser apresentado com 2 casas após o ponto.

Exemplos de Entrada	Exemplos de Saída
12 1 5.30             VALOR A PAGAR: R$ 15.50
16 2 5.10
//USANDO JSON

const pedido1 = {
    codigo: 12, 
    quantidade: 1, 
    valor: 5.30
};

const pedido2 = {
    codigo: 16, 
    quantidade: 2, 
    valor: 5.10
}

const totalPedidos = ((pedido1.valor) * (pedido1.quantidade) + (pedido2.valor) * (pedido2.quantidade))

console.log("VALOR A PAGAR: R$ " + totalPedidos.toFixed(2));