const express = require('express');
const cors = require('cors');

const {dbConnection} = require('../database/config');

class Server{
    
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuarioPath = '/api/usuarios';

        //Conectar a la base de datos
        this.conectarDB();
        //Middlewares
        this.middlewares();
        //Rutas
        this.routes();
    }

    async conectarDB (){
        await dbConnection();
    }

    middlewares(){
        this.app.use(cors());

        //Leer y convertir a formato JSON el body
        this.app.use(express.json());

        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use(this.usuarioPath,require('../routes/usuarios'));
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log('Servidor corriendo en el puerto ', this.port);
        });
    }


}

module.exports = Server;