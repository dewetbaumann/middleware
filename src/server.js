const express = require('express');
const cors = require('cors');


class Server{
    constructor(){
        this.app = express()
        this.port = process.env.PORT
        this.usersPath = '/users';
        
        // Middlewares
        this.middlewares();
        
        // Rutas de mi aplicacion
        this.routes();
    }

    routes(){ 
        this.app.use(this.usersPath,require('./routes/users'));
    }

    listen(){
        this.app.listen(
            this.port, 
            () => console.log('Servidor corriendo en el puerto:',this.port)
        );
    }

    middlewares(){
        // CORS
        this.app.use( cors() );

        // Lectura y pareseo del body
        this.app.use( express.json() );
        
        // Direction publico!
        this.app.use( express.static('public') );
    }
}

module.exports= Server;