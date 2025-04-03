function verificarIntervalos() {
    // Receber os dois números do usuário
    const numero1 = parseInt(prompt("Insira o primeiro número:"));
    const numero2 = parseInt(prompt("Insira o segundo número:"));

    // Função auxiliar para verificar em qual intervalo o número está
    function verificarNumero(numero) {
        if (numero >= 30 && numero <= 50) {
            console.log(`${numero} está no intervalo [30,50].`);
        } else if (numero >= 60 && numero <= 100) {
            console.log(`${numero} está no intervalo [60,100].`);
        } else {
            console.log(`${numero} não está em nenhum dos dois intervalos.`);
        }
    }

    // Verificar os dois números
    verificarNumero(numero1);
    verificarNumero(numero2);
}