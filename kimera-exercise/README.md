# Kimera Application Exercise

Vamos a desarrollar una aplicación, que la he llamado 'FindMe', que muestre info de usuarios obtenidos de la API 'randomusers' en forma de cards. Cuando se haga click sobre algún card, abrir nueva página mostrando información completa de dicho usuario. Responsiva para todas las pantallas.

Para este proyecto utilizaremos React como framework de desarrollo y Docker como herramienta para llevar a producción.

## Instalación

Empezamos en VSCode, e instalamos como herramienta de compilación Vite, ya que es actualmente la que proporciona un mejor equilibrio entre velocidad y robustez, ya que hay otras un poco más veloces como Turbopack pero ha sido publicada recientemente este año y no tiene la carrera ni el testeo que posee Vite. Descartamos la opción clásica de create-react-app (CRA) porque ha quedado desfasada y los en la misma documentación de React recomiendan no usarla.

Para instalar Vite y obtener la plantilla básica con la que empezaremos el proyecto, introducimos en la consola:

npm create vite@latest

Una vez se genere, nos dará a elegir en la consola diferentes opciones y elegiremos React, y seguiremos los pasos que nos indican.

Antes de empezar el desarrollo, vamos a proceder a instalar TailwindCSS. Para ello seguimos los pasos que indican en el siguiente enlace:

https://tailwindcss.com/docs/guides/vite

Aparte, hemos instalado react-router-dom, para la navegación entre páginas; y vite-plugin-svgr, para renderizar svg de una forma eficiente.

## Estructura

Se explica a continuación la estructura del proyecto:
  -> assets: imágenes.
  -> components: piezas de códigos reutilizables, tales como el loader.
  -> pages: páginas con url propia.
  -> styles: archivos de estilo.
  -> templates: archivos más complejos que podrían ser reutilizables con unas mínimas modificaciones en caso de que el proyecto siguiera creciendo.


## Pasos para iniciar proyecto

 ### Localmente

 Para iniciar el proyecto de forma local, basta con el siguiente comando:

 npm run dev

 y el proyecto estará disponible en el puerto 5173 de localhost.

 ### Docker

Para iniciar el proyecto en Docker, simplemente tenemos que crear una imagen mediante el siguiente comando:

docker build -t kimera-exercise .

y una vez se haya creado la imagen, iniciamos el proyecto con el comando:

docker run -p 8080:8080 kimera-exercise

cuando haya acabado, el proyecto estará iniciado en el puerto 8080 de localhost.
 






