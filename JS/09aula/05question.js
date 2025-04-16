for(let numeroPrimo = 2; numeroPrimo <= 20; numeroPrimo++){  //começa do 2 ate o 20
    let iEprimo = true;                                     // verdadi q o numero é primo

    for(i= 2; i < numeroPrimo; i++){                         //testar divisores de 2 ate 20(numeroPrimo)
        if(numeroPrimo % i === 0){                            // se for divisivel por algum numero 
            iEprimo = false;                                 // NAO É PRIMO 
        }
    }

    if(iEprimo){
        console.log(numeroPrimo);                  // so imprime se for primo
        
    }
}