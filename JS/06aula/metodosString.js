let nome = 'ariel boca de mel';

console.log(nome[3]);
console.log(nome.charAt(6));  //charAt acessa o character que voce indicar a posição do array/string

console.log(nome.length); // length indicara quantos characteres tem em sua string

console.log(nome.toLowerCase()); //tranforma tudo em minusculo
console.log(nome.toUpperCase()); // tranforma tudo em maiusculo

console.log(nome.substring(0, 5)); // o primeiro numero indica onde começa o corte e o segundo numeor indica onde termina

console.log(nome.split('  '));

let batata = 'batata'
console.log(batata.split('t')) //o split corta tudo o que voce especificar e separa o restante em strings separadas

let meuNome = 'antonio fagunde'
console.log(meuNome.replace('antonio', 'fagunde'))