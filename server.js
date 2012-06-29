var http = require("http");
var socketio = require("socket.io");
var fs = require("fs");
var path = require("path");

var server = http.createServer(function (req, res) {
    function fourofour() {
        res.writeHead(404);
        res.end();
    }
    
    path.exists(__dirname + req.url, function (exists) {
        if (exists) {
            fs.stat(__dirname + req.url, function (err, stat) {
                if (stat.isFile()) {
                    res.writeHead(200);
                    fs.createReadStream(__dirname + req.url).pipe(res);
                }
                else {
                    fourofour();
                }
            });
        }
        else {
            fourofour();
        }            
    });
});

server.listen(process.env.PORT);
var io = socketio.listen(server);

var shakes = 0;
io.sockets.on('connection', function(socket) {
    
    socket.on('shakin', function(data) {
        shakes++;
        
        console.log(shakes);
        
        io.sockets.emit('total-shakes', shakes);
        
        if (shakes > 100) {
            io.sockets.emit('milkshake');
        }
    });
    
});