let restaurante = 'Olá!! Seja bem vindo!!'
console.log(restaurante , 'Em que podemos te ajudar hoje?');

let cliente = 'Me mostre o cardápio';
console.log(cliente);

let comida1 = 'strogonoff' ;
let comida2 = 'feijoada' ;
let comida3 = 'baiao de dois';
let comida4 = 'macarroneidis';

console.log('Aqui no nosso restaurante temos:');
console.log(comida1);
console.log(comida2);
console.log(comida3);
console.log(comida4);

let comidaEscolhida = 'feijoada';

console.log('Eu quero', comidaEscolhida );


if (comidaEscolhida == comida1) {
    console.log('Aqui está o seu', comida1, 'aproveite!');  
} else if (comidaEscolhida == comida2) {
    console.log('Toma aqui essa feijuca quentinha chefia');
} else if (comidaEscolhida == comida3) {
    console.log('Tome seu', comida3 ,'mofi. ta gostoso!!');   
} else if (comidaEscolhida == comida4) {
    console.log('Olha o que chegou!!!! A', comida4 , 'está prontinha pro seu buxo!!!');   
} else if (comidaEscolhida != comida1 | comida2 | comida3 | comida4)
    console.log('Sinto muito, não fazemos isso aqui.');
    

