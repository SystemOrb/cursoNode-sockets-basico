        // Establecemos la conexión
        var socket = io();
        socket.on('connect', function() {
            console.log('Conectado al servidor');
        });
        // Desconectamos el cliente
        socket.on('disconnect', function() {
            console.log('Desconectado del servidor');
        });
        // Enviamos data al servidor
        socket.emit('message', {
            nombre: 'Carlos',
            id: '23232323',
            message: 'Hola mundo!'
        }, function(response) { // callback
            console.log(response);
        });
        // Escuchamos la respuesta del servidor
        socket.on('message', function(data, callback) {
            console.log(data);
            /* if (!data.id) {
                 callback({
                     status: false,
                     err: 'Necesita enviar el ID del usuario'
                 });
             } else {
                 callback({
                     status: true,
                     resp: 'Mensaje enviado correctamente al cliente'
                 });
             }*/
        });