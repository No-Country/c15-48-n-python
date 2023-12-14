const calculateTime = (fechaInicial) => {
    const fechaActual = new Date();
    const tiempoTranscurrido = fechaActual - fechaInicial;
  
    // Convertir el tiempo de milisegundos a segundos
    const segundosTranscurridos = Math.floor(tiempoTranscurrido / 1000);
  
    // Lógica para mostrar el tiempo en el formato deseado
    if (segundosTranscurridos < 60) {
      return `Hace ${segundosTranscurridos} segundos`;
    } else if (segundosTranscurridos < 3600) {
      const minutos = Math.floor(segundosTranscurridos / 60);
      return `Hace ${minutos} minutos`;
    } else if (segundosTranscurridos < 86400) {
      const horas = Math.floor(segundosTranscurridos / 3600);
      return `Hace ${horas} horas`;
    } else {
      const dias = Math.floor(segundosTranscurridos / 86400);
      return `Hace ${dias} días`;
    }
  };
  
  // Ejemplo de uso

  export default calculateTime;