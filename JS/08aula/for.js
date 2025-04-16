

    //inicializaçao     condição        incremento
/*for(contador = 1;       contador <= 50; contador++){
    console.log(contador);
}*/

let tiposManga = ['Palmer', 'Tommy', 'Rosa', 'Ubá', 'Espada'];

/*Contador no início do array 1 = 0
  Executará enquanto i for menor que a quantidade de itens no array de mangas
  i++ incrementa/adiciona 1 ao numero anterior
*/

for(i = 0; i < tiposManga.length; i++){
    console.log(`${i+1} ${tiposManga[i]}`);
}

let contador = 0

// while repetirá enquanto sua comparaçao for verdade

while (contador <= 10) {
    console.log('makonha');
    
    if (contador == 10) {
        console.log('Compreensível, tenha um ótimo dia.');
    }
    contador++
}
