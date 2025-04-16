let hamburguer1 = 'pequeno'
let hamburguer2 = 'médio'
let hamburguer3 = 'grande'

let tamanhoEscolhido = hamburguer3

console.log('Bem-vindo a Hamburgueria Siri Cascudo! Como posso te ajudar hoje?');
console.log('Gostaria de ver o cárdapio');
console.log('Aqui no Siri Cascudo trabalhamos com os tamanhos dos hamburgueres. Escolha o seu desjado: \n', hamburguer1, '\n', hamburguer2, '\n', hamburguer3);
console.log('Eu quero o', tamanhoEscolhido);

console.log('-----------------------------------------------------------------------------------------');

if (tamanhoEscolhido === hamburguer1) {
    console.log('Seu hamburguer ficará pronto em 5 minutos, senhor');
} else if (tamanhoEscolhido === hamburguer2) {
    console.log('Seu hamburguer ficará pronto em 10 minutos, senhor.');
} else if (tamanhoEscolhido === hamburguer3) {
    console.log('Seu hamburguer ficará pronto em 15 minutos, senhor.');
} else{
    console.log('Escolha uma das opções do cárdapio');
}

console.log('-----------------------------------------------------------------------------------------');
console.log('Aqui está seu hamburguer, obrigado pela preferência e volte sempre!');