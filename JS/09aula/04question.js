let fibonacci = 10    //quantos numeros eu quero
let numero1 = 0       // primeiro numero da sequencia
let numero2 = 1       // segundo numero da sequencia
let contador = 0

while (contador < fibonacci) {        //enquanto o valor do contador for menor da quantidade que quero, roda o loop
    let proximo = numero1 + numero2   // soma dos dois ultimos numeros
    numero1 = numero2                 // o numero1 vira o numero2 p continuar calculando
    numero2 = proximo                 // o numero2 vira o proximo numero que vamos calcular
    contador++                        // incrementa o contador ate o limite que colocamos

    console.log(numero1);
    
}