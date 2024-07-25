# Marvel Backend

## Manual de instalación

El proyecto fue desarrollado en Node.js con TypeScript y Express, es necesario tener Node en una versión actualizada, yo utilicé la [16](https://nodejs.org/es/download/) y el gestor de paquetes de Node, NPM, mayor a la 8 (que viene con Node por defecto). Para almecenar datos se utilizó TypeORM con un motor de PostgreSQL, por lo que si no se tiene instalado ese motor se puede modificar la instancia de TypeORM por otro motor de preferencia y debería funcionar igual el proyecto.

La configuración del proyecto cuenta con el uso de un archivo `.env` donde se guarda la información de la configuración de base de datos y es importante crear dicho archivo y agregarlo a la raíz del proyecto con las siguientes variables:

  - DB_HOST=`<host>`: host de la base de datos.
  - DB_PORT=`<puerto>`: puerto de la base de datos.
  - DB_NAME=`<name>`: puede ser cualquier nombre, yo utilicé `marvel`.
  - API_PORT=`<port>`: por defecto usar 8080

Pära correr el proyecto debe instalar las dependencias de NodeJS usando el comando `npm install` en la consola, ubicándose dentro de la carpeta `marvel-backend`. Al finalizar la instalación resta usar el comando `npm start` para correr el proyecto.