 // 2.2. Sistema de Suporte Técnico
// 📌 Descrição:
// O sistema recebe um código de erro relatado pelo cliente.
// Se o código for E101, informa que há um problema na conexão de internet.
// Se for E202, indica que há uma falha no servidor.
// Se for E303, informa que há um erro no login do sistema.
// Se o código não for reconhecido, exibe a mensagem "Erro desconhecido, entre em contato com o suporte".

let erro1 = 'E101';
let erro2 = 'E202';
let erro3 = 'E303';
let erroRelatado = erro3

console.log('Olá. Por favor nos informe o código de erro que foi enviado no seu e-mail.');
console.log(erroRelatado);

if (erroRelatado === erro1) {
    console.log('E101 - PROBLEMA DE CONEXÃO À INTERNET');
}else if (erroRelatado === erro2) {
    console.log('E202 - FALHA NO SERVIDOR');
}else if (erroRelatado === erro3) {
    console.log('E303 - ERRO DE LOGIN NO SISTEMA');
}else {
    console.log('Erro desconhecido, entre em contato com o suporte.');
}

