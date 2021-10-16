const {response, request} = require('express');

const usuariosGet = (req = request, res = response) =>{
    //Obtener los parametros de la consulta
    const {nombre = 'No name', apellido = 'NO last name'} = req.query;

    res.json({
        msg:'get API - controlador',
        nombre,
        apellido
    });
}

const usuariosPost = (req, res = response) =>{

    //Acceder al body de la petición
    const body = req.body;

    res.json({
        msg:'post API - controlador',
        body
    });
}

const usuariosPut = (req, res = response) =>{

    const id = req.params.id;

    res.json({
        msg:'put API - controlador',
        id
    });
}

const usuariosPatch = (req, res = response) =>{
    res.json({
        msg:'patch API - controlador'
    });
}

const usuariosDelete = (req, res = response) =>{
    res.json({
        msg:'delete API - controlador'
    });
}


module.exports = {

    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete

}