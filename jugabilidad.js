
window.onload = function () {
    
  //Creamos las variables básicas para nuestro juego
    const piedra_boton = document.getElementById('piedra');
    const papel_boton = document.getElementById('papel');
    const tijeras_boton = document.getElementById('tijeras');
  
    const piedra = 'piedra';
    const papel = 'papel';
    const tijeras = 'tijeras';
  
    const mensaje = document.getElementById('mensaje');
    let turno_jugador = true;
    let puntos_jugador = 0; 
    let puntos_bot = 0; 
  





    //Funcion EMPEZAR en la que de forma random comienza el jugador o el bot
    function empezar() {
      let numero_random = Math.floor(Math.random() * 2);
      puntos_jugador = 0; 
      puntos_bot = 0;
      document.getElementById('puntos_jugador').textContent = puntos_jugador;
      document.getElementById('puntos_bot').textContent = puntos_bot;
  
      if (numero_random === 0) {
        mensaje.textContent = "Empiezas tú";
        mensaje.classList.add("empieza_jugador");
        
        turno_jugador = true;
        jugar_jugador();
        jugar_bot();
      } else if (numero_random === 1) {
        mensaje.textContent = "Empieza el bot";
        mensaje.classList.add("empieza_bot");
        
        turno_jugador = false;
        jugar_bot();
        mensaje.textContent = "El bot ha elegido. Ahora es tu turno";
        jugar_jugador();
      }
    }
    //Funcion JUGAR_BOT en la que le damos la funcionalidad a la eleccion de la maquina
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


    //Funcion JUGAR_JUGADOR en la que le damos la funcionalidad a la eleccion del jugador según haga click en cada boton o imagen
    function jugar_jugador() {
      piedra_boton.addEventListener('click', eventoPiedra);
  
      papel_boton.addEventListener('click', eventoPapel);
  
      tijeras_boton.addEventListener('click', eventoTijeras);
    }

    function eventoPiedra(){
      const opcion_jugador = piedra;
      const opcion_maquina = jugar_bot();
      comparar(opcion_jugador, opcion_maquina);

    }
    function eventoPapel(){
      const opcion_jugador = papel;
      const opcion_maquina = jugar_bot();
      comparar(opcion_jugador, opcion_maquina);

    }
    function eventoTijeras(){
      const opcion_jugador = tijeras;
      const opcion_maquina = jugar_bot();
      comparar(opcion_jugador, opcion_maquina);

    }
  




    //Funcion COMPARAR en la que comparamos las jugadas y puntuaciones de cada jugador
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
        mensaje.classList.add("puntos_empate");
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
        mensaje.classList.add("puntos_jugador");
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
        mensaje.classList.add("puntos_bot");
        mensaje.textContent = "Punto para el bot";
      }
  

      // IF de salida para finalizar el juego si se supera la puntuación máxima programada
      if (puntos_jugador >= 5 || puntos_bot >= 5) {
        piedra_boton.removeEventListener('click', eventoPiedra);
        papel_boton.removeEventListener('click', eventoPapel);
        tijeras_boton.removeEventListener('click', eventoTijeras); /*Removemos los eventos de clickado de cada boton para no permitir 
        que se hagan mas elecciones hasta darle al boton de INICIO*/
        

  
        if (puntos_jugador > puntos_bot) {
          mensaje.classList.add("gana_jugador");
          mensaje.innerHTML = 'HAS GANADO!! <span>&#x1F60A;</span>';
          
        } else if (puntos_bot > puntos_jugador) {
          mensaje.classList.add("gana_maquina");
          mensaje.innerHTML = 'Te ha derrotado la máquina<span>&#x1F916;</span>';

        }
      }
    }
  

    //Llamamos a la función principal para comenzar el juego
    document.getElementById('jugar').addEventListener('click', empezar);
  };