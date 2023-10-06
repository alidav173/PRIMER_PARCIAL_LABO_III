


var altMax = document.getElementById("AltMax");
var etiqueta4= document.getElementById("etiqueta4")
ocultarElemento(etiqueta4);
ocultarElemento(altMax);
var etiqueta5= document.getElementById("etiqueta5")
var autonomia = document.getElementById("Autonomia");
ocultarElemento(etiqueta5);
ocultarElemento(autonomia);

var cantPue = document.getElementById("CantPue");
var etiqueta6= document.getElementById("etiqueta6")
ocultarElemento(etiqueta6);
ocultarElemento(cantPue);
var etiqueta7= document.getElementById("etiqueta7")
var cantRue = document.getElementById("CantRue");
ocultarElemento(etiqueta7);
ocultarElemento(cantRue);


function ocultarElemento(objeto)
{
    $(objeto).hide();
}

function mostrarElemento(objeto)
{
    $(objeto).show();
}

function cancelar(){

  location.href ='./PP.html';
}



function agregarVehiculo()
{
  let modelo = document.getElementById("Modelo").value;
  let anoFabricacion =  document.getElementById("AnoFab").value;
  let velocidadMax = document.getElementById("VelMax").value;
  let tipoVehiculo = document.getElementById("select").value;
  if(tipoVehiculo == Aereo)
  {
    let altMax = document.getElementById("AltMax").value;
    let autonomia = document.getElementById("Autonomia").value;
    if(anoFabricacion == Number && velocidadMax == Number && altMax == Number && autonomia == Number)
    {
      let ultimoId = 872;
      let nuevoAereo = new Aereo(ultimoId++,modelo,anoFabricacion,velocidadMax,altMax,autonomia);
      console.log(nuevoAereo);
    }
  }
  else
  {
    let cantRue = document.getElementById("CantRue").value;
    let cantPue = document.getElementById("CantPue").value;
    if(anoFabricacion == Number && velocidadMax == Number && altMax == Number && autonomia == Number
      && cantPue == Number && cantRue == Number)
    {
      let ultimoId = 872;
      let nuevoTerrestre = new Terrestre(ultimoId++,modelo,anoFabricacion,velocidadMax,cantPue,cantRue);
      console.log(nuevoTerrestre);
    }
  }
}

$(document).ready(function() {

    $("#select").on("change",function(){
        var selectValor = $(this).val();
        if(selectValor == "Aereo")
        {
          $(altMax).show();
          $(etiqueta4).show();
          $(autonomia).show();
          $(etiqueta5).show();
          $(cantPue).hide();
          $(etiqueta6).hide();
          $(cantRue).hide();
          $(etiqueta7).hide();
        }
        else
        {
          $(altMax).hide();
          $(etiqueta4).hide();
          $(autonomia).hide();
          $(etiqueta5).hide();
          $(cantPue).show();
          $(etiqueta6).show();
          $(cantRue).show();
          $(etiqueta7).show();
        }

    });
});
