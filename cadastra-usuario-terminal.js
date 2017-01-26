var http = require('http');
var jwt = require('jwt-simple');
// var1 = 1 + "john@gmail.com";
token = jwt.encode(1, "Pr0c0n1P2-4P1");
console.log(token);

var config = {
    hostname: 'localhost',
    port: 3000,
    path: '/users/1',
    method: 'put',
    headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json',
        'Authorization': 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.IjEi.2kB2jA_uTtm1JitlVlhYIiWcZDO5RFwLcAV56eqwBxE'
    }
};

var client = http.request(config, function (res) {
    console.log(res.statusCode);
    res.on('data', function(body) {
        console.log('CORPO: '+body);
    });
});

var usuario = {
    id: 1,
    nome: 'John',
    email: 'john@mail.net',
    password: 12345
};

client.end(JSON.stringify(usuario));
