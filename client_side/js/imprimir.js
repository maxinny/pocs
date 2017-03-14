
var imprimirCHQ = (function(){
    var rootURL = "http://127.0.0.1:1989";
    var module = {};
    var self = module;


    module.init = function(){
    };

  module.imprimirCheque = function() {
     var obj = '{"cuentaCCC":"00004616804","nombreLinea1":"EMISION CHEQUE EXPRESS","nombreLinea2":"TACTICO","dirSucursal":"AVDA. VITACURA 2710 LOCAL 102","localidad":"LAS CONDES","codSR":"000000562|000000563|000000564|000000565|000000566|000000567|000000568|000000569|000000570|000000571|000000572|000000573","codSV":"517|657|565|432|299|207|967|875|709|617|071|392","codPL":"0280|0280|0280|0280|0280|0280|0280|0280|0280|0280|0280|0280","tipoDoc":"01"}';
    //	console.log('imprimirCheque');
    	$.ajax({
    		type: 'POST',
    		url: rootURL ,
        data : obj,
    		dataType: "json",
    		success: function(data, textStatus, jqXHR) {
          $('#result').text("Resultado de la Impresion: "+data.description);
        }
    	});
    }
    return {
        init: module.init,
        imprimirCheque: module.imprimirCheque
      };


})();

$(document).ready(function(){
    imprimirCHQ.init();

  $('#imprimir').click(function(){
      imprimirCHQ.imprimirCheque();
  });
});
