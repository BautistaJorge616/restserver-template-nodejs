const {Schema, model} = require('mongoose');

const UsuariosSchema = Schema({

    nombre:{
        type: String,
                //Valor - Mensaje de error
        required: [true,'El nombre es obligatorio']
    },

    correo:{
        type: String,
                //Valor - Mensaje de error
        required: [true,'El correo es obligatorio'],
        unique: true
    },

    password:{
        type: String,
                //Valor - Mensaje de error
        required: [true,'El contraseña es obligatorio']
    },

    img:{
        type: String,
    },

    rol:{
        type: String,
        required: true,
        enum: ['ADMIN_ROLE','USER_ROLE']
    },

    estado:{
        type:Boolean,
        default:true
    },

    google:{
        type:Boolean,
        default:false
    }

});

module.exports = model('Usuario', UsuariosSchema);