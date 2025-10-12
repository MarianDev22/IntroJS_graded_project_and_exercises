// Este programa simula una llamada asincrónica para obtener un usuario
function obtenerUsuario(id, cb) {
setTimeout(() => {
    if (id === 1) {
        const usuario = { id: 1, nombre: 'John Doe' };
        cb(usuario);
    }   

}, 2000);
}
const usuario = obtenerUsuario(1,(usuario) => {
    console.log(usuario);
});
