var socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor');
})

// on =escuchar un suceso 

socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
})

// emit = enviar información 
socket.emit('enviarMensaje', {
    usuario: 'Alejandro',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('Respuesta server: ', resp);
})

socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
})