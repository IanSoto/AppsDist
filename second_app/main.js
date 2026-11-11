//Template para server RESTFUL
var express = require('express');
var app = express(); //Contenedor de Endpoints o WS Restful

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async function (request, response) { //GET asociado en un metodo TCP, se debe de implementar "/"
    //request contiene toda la info que el cliente le envia al SERVER
    // response Armar o estruc las respuestas del SERVER
    r ={
      'message':'Server is alive...' //Campo del JSON
    };
    response.json(r);
});

app.get("/ruta1", async function (req, res) {
    let r = {'dato': 1,'valor': 'Nio'};
    res.json(r);
});

app.listen(3000, function() { //se invoca localhost::3000
    console.log('Aplicación ejemplo, escuchando el puerto 3000!');
});
