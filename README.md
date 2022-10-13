# Maed-CO
Desarrollo de aplicación llamada Maed &amp; CO que es la idea de un carwash

El Desarrollo de la plataforma está dividida en dos verciones, front-end realizado con NodeJs y con Postgress SQl para el modelado de la base de datos, finalmente el front-end desarrollado con ReactJs. 

BACK-End

Se crearon las migraciones y las rutas para formar la API que se utilizará en el front-ent. 
Importante resaltar que el cicle para la misma fue este
/*
    *Crear la Table
    *Crear archivo u migrar la tabla //npm run migrate create NAME_OF_TABLE
    *IMportante aggregat pmg.sql and table info en ese archivo
    *Create rout-handlers
    *Enviar info a Postgres: DATABASE_URL=postgres://postgres:USERNAME@localhost:5432/maed npm run migrate up
    *Create routers
    *Make sure to put the exports at the class
    *Add the rout at the app file
*/

Front-End

Se desarrollo la parte visual con componentes. El Estilo esta en Sass en la carpeta de assests. 
