const io = require('../server').io;
io.on('connection', (client) => {
    console.log('Conexión establecida'.green);

    // Comprobamos cuando un cliente se desconecta
    client.on('disconnect', () => {
        console.log('Se ha desconectado un usuario'.red);
    });
    // Recibimos data del cliente
    client.on('message', (data, callback) => {
        client.broadcast.emit('message', data);
        /* if (!data.id) {
             callback({
                 status: false,
                 err: 'Necesita enviar el ID del usuario'
             });
         } else {
             callback({
                 status: true,
                 resp: 'Mensaje enviado correctamente al servidor'
             });
         }*/
    });
    // Enviamos data al cliente
    client.emit('message', {
        nombre: 'Administrador',
        id: '42424',
        message: 'Mensage de administración'
    }, (ClientResponse) => {
        console.log(ClientResponse);
    });
});