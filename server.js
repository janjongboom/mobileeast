var http = require("http");
var io = require("socket.io");
var fs = require("fs");

var server = http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.createReadStream("./server.html").pipe(res);
});

server.listen(process.env.PORT, process.env.IP);
io.listen(server);

var shakes = 0;
io.sockets.on('connection', function(socket) {
    
    socket.on('shakin', function(data) {
        shakes++;
        
        socket.emit('total-shakes', shakes);
        
        if (shakes > 100) {
            socket.emit('milkshake');
        }
    });
    
});