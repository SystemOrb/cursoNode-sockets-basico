const express = require('express');
require('colors');
const path = require('path');

const app = express();
// Socket server
const server = require('http').createServer(app);
const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// IO
module.exports.io = require('socket.io')(server);
// Connect the socket
require('./sockets/socket-io');

server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});