var fs = require('fs');
var http = require('http');

var server = http.createServer();

server.on('request', function (request, response) {
  if (request.method === 'GET' && request.url === '/') {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    response.statusCode = 200;
    fs.readFile('index.html', function(err, data) {
      response.write(data);
      response.end();
    })
  } else {
    response.statusCode = 404;
    fs.readFile('cat.jpg', function (err, data) {
      response.setHeader("Content-Type", "image/jpg; charset=utf-8");
      response.write(data);
      response.end();
    })
  }
});

server.listen(8080);