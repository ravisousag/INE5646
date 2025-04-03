function tratadorDeCliqueExercicio3() {
    // Receber a string do usuário
    const entrada = prompt("Insira uma string:");

    // Verificar se a string tem pelo menos 2 caracteres
    if (entrada.length > 2) {
        // Remover o primeiro e o último caractere
        const resultado = entrada.slice(1, -1);

        // Exibir o resultado em um alerta
        alert(`String sem o primeiro e o último caractere: ${resultado}`);
    } else {
        alert("A string deve ter pelo menos 3 caracteres.");
    }
}