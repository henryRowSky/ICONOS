let getUsuarioById = (id, callback) => {
    let usuario = {
        nombre: "Henry Rowsky",
        id
    }
    if (id === 20) {
        callback(`El usuario con el id: ${ id } no existe`);
    } else {
        callback(null, usuario);
    }
}

getUsuarioById(0, (err, usuario) => {
    if (err) {
        return console.log(err);
    }
    console.log('Usuario de BD: ', usuario);
});