
# Piedra, Papel o Tijera 

*Juego de piedra, papel o tijera* creado con tecnología HTML, CSS y Javascript.

A continuación se da una descripción y explicación detallada del juego creado y su funcionamiento básico.

## Estructura HTML (index.html)

La estructura HTML de mi juego de 'piedra, papel o tijera' ha sido realizada usando Flexbox como herramienta básica de organización del contenido.
Este se configura en un contenedor central divido en dos partes:

* En la primera parte se delimita un **campo de juego** donde se colocan las tres imágenes correspondientes a una piedra, un papel y una tijera. Estas imágenes son interactivas, como veremos posteriormente. Debajo de ellas, se muestran unos 'mensajes' que dan información al usuario sobre el desarrollo de la partida.
  
* La segunda parte del contenedor, situada a la derecha de la pantalla, se encarga de **mostrar la puntuación de cada jugador**: del jugador humano y de la máquina o bot al que se pretende ganar.

Estas dos partes se encuentran perfectamente integradas para ofrecer al usuario una **interfaz clara y sencilla** que permita al jugador divertirse en la partida.

## Estilos CSS (estilos.ccs)

Los estilos aplicados con CSS dependen por tanto de la estructura HTML descrita previamente.

Los estilos elegidos giran entorno a una **paleta de colores oscuros**, como gris y negro, que contrasten con el blanco del area de juegos. Además he intentado solo proporcionar la información necesaria por pantalla para hacer más legible y fácil de usar la aplicación.

Aunque los **estilos son generales y estáticos**, hay una parte de los estilos del archivo .css que son **dinámicos, al aparecer y desaparecer en pantalla según el desarrollo del juego**. Estos están relacionados con el mensaje que aparece bajo el area de juego y que informa del desarrollo del juego y los cambios de puntuación.

## Jugabilidad Javascript (jugabilidad.js)

Después de la estructura de la aplicación con HTML y los estilos con CSS, Javascript da la jugabilidad e interactividad a nuestro juego.

Los dos principales puntos de interacción del jugador con la aplicación son:

1) El **botón de inicio de color verde** en la esquina superior derecha, el cual se debe presionar para permitir el comienzo del juego

2) Las **tres imágenes correspondientes a la piedra, el papel o la tijera**. El jugador puede elegir su opción haciendo click cuando sea su turno
