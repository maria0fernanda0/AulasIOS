// 2.1. Sistema de Pedidos de Pizza
// 📌 Descrição:
// O sistema recebe o sabor da pizza escolhido pelo cliente.
// Se o cliente escolher Calabresa, o sistema informa que custa R$ 30,00.
// Se for Mussarela, informa que custa R$ 28,00.
// Se for Frango com Catupiry, informa que custa R$ 35,00.
// Se o sabor não estiver no menu, exibe uma mensagem de erro.

let saboresPizza = ['Calabresa', 'Mussarela', 'Frango com Catupiry'];
let saborEscolhido = saboresPizza[0]

console.log('Bem vindo a Pizza do Gueto! Como posso te ajudar?');
console.log('Me mostre o cárdapio, por favor.');
console.log('Aqui no gueto temos as pizzas de:', saboresPizza);
console.log('Vou querer a pizza de', saborEscolhido);

if (saborEscolhido === saboresPizza[0]) {
    console.log('Essa está no valor de R$ 30,00. Duas por R$ 50,00 na promoção válida até amanhã!');
}else if (saborEscolhido === saboresPizza[1]) {
    console.log('A de mussarela tá saindo por R$ 28,00.');   
}else if (saborEscolhido === saboresPizza[2]) {
    console.log('Essa também está na promoção, saindo por R$ 35,00.');
}else {
    console.log('Posso te ajudar se escolher um sabor que exista aqui.');   
}
console.log('Vai ser essa mesmo. Quero duas, por favor.');
console.log('Forma de pagamento?');
console.log('Dinheiro.');
console.log('Tudo certinho. Em 20 minutos seu pedido está pronto. Obrigada pela preferência e volte sempre!');



