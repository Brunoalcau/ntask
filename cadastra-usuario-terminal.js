var http = require('http');
var jwt = require('jwt-simple');
var1 = 4 + "emiliano@gmail.net";
console.log(var1);
token = jwt.encode(4, "Nta$K-AP1");

console.log(token);
// console.log(jwt.decode(token));

var config = {
    hostname: 'localhost',
    port: 3000,
    path: '/users/3',
    method: 'put',
    headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json',
        'Authorization': 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.IjNqb2huQGdtYWlsLm5ldCI.9wWlFbYkWafOnRuebkZ0ja2CtCC7jPBKuIdaALEO7Ag'
    }
};

var client = http.request(config, function (res) {
    console.log(res.statusCode);
    res.on('data', function(body) {
        console.log('CORPO: '+body);
    });
});

var usuario = {
    id: 3,
    nome: 'John',
    email: 'john@mail.net',
    password: 12345
};

client.end(JSON.stringify(usuario));
