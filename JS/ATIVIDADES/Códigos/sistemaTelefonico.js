// sistema de atendiment0 telefonico

let urgente = 1
let comum = 2
let geral = 3
let opcaoEscolhida = urgente

console.log('Olá! Bem vindo a Central de Atendimento Telefônico. Essa mensagem é gravada.\nPor favor, nos informe o intuito da ligação.\nSe o seu caso for URGENTE, digite 1\nSe o seu caso for COMUM, digite 2\nSe o seu caso for INFORMAÇÕES GERAIS, digite 3');
console.log('-----------------------------------------------------------------------------');
console.log(opcaoEscolhida);
console.log('-----------------------------------------------------------------------------');


if (opcaoEscolhida === urgente) {
    console.log('Você será direcionado à um dos nossos atendentes, aguarde');
    console.log('-----------------------------------------------------------------------------');
    console.log('Olá. Como posso te ajudar?');
}else if (opcaoEscolhida === comum) {
    console.log('Você será direcionado à fila de espera, por favor aguarde.');
}else if (opcaoEscolhida === geral) {
    console.log('Bem vindo as informações gerais. Selecione uma opção para continuar:\nInformações sobre produtos e/ou serviços\nFinanceiro/Faturas');
}else{
    console.log('Por favor, escolha uma opção válida');
}
