window.onload = function () {
    // Aquí comienza el script del juego
  
    const piedra_boton = document.getElementById('piedra');
    const papel_boton = document.getElementById('papel');
    const tijeras_boton = document.getElementById('tijeras');
  
    const piedra = 'piedra';
    const papel = 'papel';
    const tijeras = 'tijeras';
  
    const mensaje = document.getElementById('mensaje');
    let turno_jugador = true;
    let puntos_jugador = 0; // Initialize points to 0
    let puntos_bot = 0; // Initialize points to 0
  
    function empezar() {
      let numero_random = Math.floor(Math.random() * 2);
  
      if (numero_random === 0) {
        mensaje.textContent = "Empiezas tú";
        mensaje.style.color = "green";
        mensaje.style.backgroundColor = "lightgreen";
        mensaje.style.width = "255px";
        mensaje.style.height = "35px";
        mensaje.style.textAlign = "center";
        mensaje.style.borderRadius = "5px";
        turno_jugador = true;
      } else if (numero_random === 1) {
        mensaje.textContent = "Empieza el bot";
        mensaje.style.color = "red";
        mensaje.style.backgroundColor = "salmon";
        mensaje.style.width = "255px";
        mensaje.style.textAlign = "center";
        mensaje.style.borderRadius = "5px";
        mensaje.style.height = "35px";
        turno_jugador = false;
        jugarBot();
      }
  
      piedra_boton.addEventListener('click', function () {
        if (turno_jugador) {
          const opcion_jugador = piedra;
          const opcion_maquina = jugarBot();
          comparar(opcion_jugador, opcion_maquina);
        }
      });
  
      papel_boton.addEventListener('click', function () {
        if (turno_jugador) {
          const opcion_jugador = papel;
          const opcion_maquina = jugarBot();
          comparar(opcion_jugador, opcion_maquina);
        }
      });
  
      tijeras_boton.addEventListener('click', function () {
        if (turno_jugador) {
          const opcion_jugador = tijeras;
          const opcion_maquina = jugarBot();
          comparar(opcion_jugador, opcion_maquina);
        }
      });
    }
  
    function jugarBot() {
      const opcion_maquina = Math.floor(Math.random() * 3);
  
      if (opcion_maquina === 0) {
        mensaje.textContent = "El bot eligió Piedra";
        return piedra;
      } else if (opcion_maquina === 1) {
        mensaje.textContent = "El bot eligió Papel";
        return papel;
      } else if (opcion_maquina === 2) {
        mensaje.textContent = "El bot eligió Tijeras";
        return tijeras;
      }
    }
  
    function comparar(opcion_jugador, opcion_maquina) {
      mensaje.textContent = "";
  
      if (opcion_jugador === opcion_maquina) {
        puntos_bot++;
        puntos_jugador++;
        document.getElementById('puntos_jugador').textContent += '|';
        document.getElementById('puntos_bot').textContent += '|';
        mensaje.textContent = "Empate. 1 punto para cada uno";
      } else if (
        (opcion_jugador === piedra && opcion_maquina === tijeras) ||
        (opcion_jugador === papel && opcion_maquina === piedra) ||
        (opcion_jugador === tijeras && opcion_maquina === papel)
      ) {
        puntos_jugador++;
        document.getElementById('puntos_jugador').textContent += '|';
        mensaje.textContent = "Has ganado el punto";
      } else {
        puntos_bot++;
        document.getElementById('puntos_bot').textContent += '|';
        mensaje.textContent = "El bot ha ganado el punto";
      }
    }
  
    document.getElementById('jugar').addEventListener('click', empezar);
  };
  