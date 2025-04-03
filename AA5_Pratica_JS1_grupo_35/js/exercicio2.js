function tratadorDeCliqueExercicio2() {
    const agora = new Date();

    let horas = agora.getHours();
    const minutos = agora.getMinutes();
    const segundos = agora.getSeconds();

    // Determinar AM ou PM
    const periodo = horas >= 12 ? 'PM' : 'AM';

    // Converter para formato de 12 horas
    horas = horas % 12 || 12;

    // Formatar a string no formato solicitado
    const horarioFormatado = `Horário: ${horas} ${periodo} : ${minutos}m : ${segundos}s`;

    // Exibir o alerta
    alert(horarioFormatado);
}