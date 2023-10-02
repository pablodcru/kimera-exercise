# kimera-exercise
Vamos a desarrollar una aplicación que muestre info de usuarios obtenidos de la API 'randomusers' en forma de <i>cards</i>. Cuando se haga click sobre algún card, abrir nueva página mostrando información completa de dicho usuario.

Para este proyecto utilizaremos React como framework de desarrollo y Docker como herramienta para llevar a producción.

Empezamos en VSCode, e instalamos como herramienta de compilación Vite, ya que es actualmente la que proporciona un mejor equilibrio entre velocidad y robustez, ya que hay otras un poco más veloces como Turbopack pero ha sido publicada recientemente este año y no tiene la carrera, el testeo, que posee Vite. Descartamos la opción clásica de create-react-app (CRA) porque ha quedado desfasada y los en la misma documentación de React recomiendan no usarla.

Para instalar Vite y obtener la plantilla básica con la que empezaremos el proyecto, introducimos en la consola:

npm create vite@latest

Una vez se genere, nos dará a elegir en la consola diferentes opciones y elegiremos React, y seguiremos los pasos que nos indican.

Antes de empezar el desarrollo, vamos a proceder a instalar TailwindCSS. Para ello seguimos los pasos que indican en el siguiente enlace:

https://tailwindcss.com/docs/guides/vite

