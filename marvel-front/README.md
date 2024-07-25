# MarvelAngular

## Manual de instalación

El proyecto corre por defecto en el puerto `4200`. Para instalar las dependencias se debe usar el comando `npm install` en la consola, ubicándose dentro de la carpeta `marvel-frontend`. Adicional, en la carpeta `environments` se encuentran 2 archivos, de los cuales sólo se usará `environment.ts`, en este se debe modificar las variables para correr a la par con el backend (en el caso de modificar el puerto de ejecución del back y/o querer modificar la autenticación con la API de Marvel). Al finalizar la instalación resta usar el comando `npm start` para correr el proyecto y abrir el navegador para usarlo, escribiendo en la barra de búsqueda `localhost:4200`.

## Consideraciones

El proyecto se llevó a cabo de tal forma que los comics que se utilizan para mostrar y guardar en favoritos están pre cargados en un archivo llamado `mockData.ts`. Esto debido a que la conexión con la API de Marvel no fue posible, intenté tanto en el back como en el front, utilizando diferentes opciones, modificando el timeout del HTTP Client pero de ninguna forma fue posible. Estos datos fueron cargados gracias a que el consumo directo desde Postman me permitió ver el resultado de la consulta.

De igual forma en algunos fragmentos del código dejé la forma como hubiera funcionado el consumo de los cómics para mejorar la experiencia de usuario (usando Resolvers para precargar los datos), ya que con la solución actual fui obligado a manejar los comics en memoria y al momento de querer refrescar en la pantalla que muestra más datos del comic este se va a borrar y mostrará un error.
