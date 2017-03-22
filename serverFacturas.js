var listaFacturas=[];

var facturaDatos = {"id": "A", "concepto":"mac", "importe":1000};
var facturaDatos2 = {"id": "B", "concepto":"iphone", "importe":700};

listaFacturas.push(facturaDatos);
listaFacturas.push(facturaDatos2);

var express = require("express");
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json(), function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, DELETE");
  next();
});


app.post("/facturas",function (req, res) {
  console.log(req.body);
  listaFacturas.push(req.body);
  res.send(req.body);
});

app.get("/facturas",function (req,res) {
    res.send(listaFacturas);
});

app.delete("/facturas/id/:id",function(req,res) {

  listaFacturas = listaFacturas.filter(function(factura) {
      return req.params.id !== factura.id;
  });
    res.send(req.params.id);
});

var servidor = app.listen(3001, function () {
  console.log("Servidor arrancado: 3001");
});
