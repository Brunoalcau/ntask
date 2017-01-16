var http = require('http');

var config = {
    hostname: 'localhost',
    port: 3000,
    path: '/users',
    method: 'post',
    headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
    }
};

var client = http.request(config, function (res) {
    console.log(res.statusCode);
    res.on('data', function(body) {
        console.log('CORPO: '+body);
    });
});

var usuario = {
    nome : 'John',
    email: 'john@mail.net',
    password: 12345
};

client.end(JSON.stringify(usuario));
