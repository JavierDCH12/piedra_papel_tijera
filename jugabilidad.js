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
    let puntos_jugador = 0; // Inicializar puntos a 0
    let puntos_bot = 0; // Inicializar puntos a 0
  
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
        jugar_jugador();
        jugar_bot();
      } else if (numero_random === 1) {
        mensaje.textContent = "Empieza el bot";
        mensaje.style.color = "red";
        mensaje.style.backgroundColor = "salmon";
        mensaje.style.width = "255px";
        mensaje.style.textAlign = "center";
        mensaje.style.borderRadius = "5px";
        mensaje.style.height = "55px";
        turno_jugador = false;
        jugar_bot();
        mensaje.textContent = "El bot ha elegido. Ahora es tu turno";
        jugar_jugador();
      }
    }
  
    function jugar_bot() {
      const opcion_maquina = Math.floor(Math.random() * 3);
  
      if (opcion_maquina === 0) {
        return piedra;
      } else if (opcion_maquina === 1) {
        return papel;
      } else if (opcion_maquina === 2) {
        return tijeras;
      }
    }
  
    function jugar_jugador() {
      piedra_boton.addEventListener('click', function () {
          const opcion_jugador = piedra;
          const opcion_maquina = jugar_bot();
          comparar(opcion_jugador, opcion_maquina);
        
      });
  
      papel_boton.addEventListener('click', function () {
          const opcion_jugador = papel;
          const opcion_maquina = jugar_bot();
          comparar(opcion_jugador, opcion_maquina);
        
      });
  
      tijeras_boton.addEventListener('click', function () {
          const opcion_jugador = tijeras;
          const opcion_maquina = jugar_bot();
          comparar(opcion_jugador, opcion_maquina);
      });
    }
  
    function comparar(opcion_jugador, opcion_maquina) {
      mensaje.textContent = "";
  
      if (opcion_jugador === opcion_maquina) {
        console.log(puntos_jugador)
        console.log(puntos_bot)
        puntos_bot += 1;
        puntos_jugador += 1;
        console.log(puntos_jugador)
        console.log(puntos_bot)
        document.getElementById('puntos_jugador').textContent = puntos_jugador;
        document.getElementById('puntos_bot').textContent = puntos_bot;
        mensaje.style.color = "black";
        mensaje.style.backgroundColor = "yellow";
        mensaje.style.width = "255px";
        mensaje.style.height = "55px";
        mensaje.style.textAlign = "center";
        mensaje.style.borderRadius = "5px";
        mensaje.textContent = "Empate. 1 punto para cada uno";
      } else if (
        (opcion_jugador === piedra && opcion_maquina === tijeras) ||
        (opcion_jugador === papel && opcion_maquina === piedra) ||
        (opcion_jugador === tijeras && opcion_maquina === papel)
      ) {
        console.log(puntos_jugador)
        puntos_jugador += 1;
        console.log(puntos_jugador)
        document.getElementById('puntos_jugador').textContent = puntos_jugador;
        mensaje.style.color = "green";
        mensaje.style.backgroundColor = "lightgreen";
        mensaje.style.width = "255px";
        mensaje.style.height = "55px";
        mensaje.style.textAlign = "center";
        mensaje.style.borderRadius = "5px";
        mensaje.textContent = "Has ganado el punto";
      } else if (
        (opcion_jugador === tijeras && opcion_maquina === piedra) ||
        (opcion_jugador === piedra && opcion_maquina === papel) ||
        (opcion_jugador === papel && opcion_maquina === tijeras)
      ) {
        console.log(puntos_bot)
        puntos_bot += 1;
        console.log(puntos_bot)
        document.getElementById('puntos_bot').textContent = puntos_bot;
        mensaje.style.color = "red";
        mensaje.style.backgroundColor = "lightred";
        mensaje.style.width = "255px";
        mensaje.style.height = "60px";
        mensaje.style.textAlign = "center";
        mensaje.style.paddingTop = "10px";

        mensaje.style.borderRadius = "5px";
        mensaje.textContent = "Punto para el bot";
      }
  
      if (puntos_jugador >= 5 || puntos_bot >= 5) {
        piedra_boton.removeEventListener('click', jugar_jugador);
        papel_boton.removeEventListener('click', jugar_jugador);
        tijeras_boton.removeEventListener('click', jugar_jugador);
  
        if (puntos_jugador > puntos_bot) {
          mensaje.style.color = "white";
          mensaje.style.backgroundColor = "green";
          mensaje.style.width = "350px";
          mensaje.style.height = "60px";
          mensaje.style.textAlign = "center";
          mensaje.style.paddingTop = "10px";
          mensaje.style.borderRadius = "5px";
          mensaje.innerHTML = 'HAS GANADO!! <span>&#x1F60A;</span>';
          
        } else if (puntos_bot > puntos_jugador) {
          mensaje.style.color = "black";
          mensaje.style.backgroundColor = "lightred";
          mensaje.style.width = "350px";
          mensaje.style.height = "55px";
          mensaje.style.textAlign = "center";
          mensaje.style.borderRadius = "5px";
          mensaje.innerHTML = 'Te ha derrotado la máquina... <span>&#x1F916;</span>';

        }
      }
    }
  
    document.getElementById('jugar').addEventListener('click', empezar);
  };
  