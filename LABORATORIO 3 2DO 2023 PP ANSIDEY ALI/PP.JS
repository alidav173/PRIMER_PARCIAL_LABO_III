class Vehiculo
{
id;
modelo;
anoFab;
velMax;
 constructor(_id, _modelo, _anoFab, _velMax)
 {
  if(_id != Number && _modelo != null && _anoFab != Number &&
    _velMax != Number)
    {
      this.id = _id;
      this.modelo = _modelo;
      this.anoFab = _anoFab;
      this.velMax = _velMax;
    }
    else{
      alert("Ingrese valores validos");
    }

 }

 toString () {

  return `{Id:"${this.id}", modelo: "${this.modelo}",AnoFab: "${this.anoFab}", velMax: "${this.velMax}"}`;
}


}

class Aereo extends Vehiculo
{
  altMax;
  autonomia;

  constructor(_id, _modelo, _anoFab, _velMax, _altMax, _autonomia)
  {
    super(_id, _modelo, _anoFab, _velMax);
    this.altMax = _altMax;
    this.autonomia = _autonomia;

  }

  toString () {

    return `{Id:"${this.id}", modelo: "${this.modelo}",AnoFab:
    "${this.anoFab}", velMax: "${this.velMax}", altMax: "${this.altMax}", autonomia: "${this.autonomia}"}`;
  }

}

class Terrestre extends Vehiculo
{
cantPue;
cantRue;
constructor(_id, _modelo, _anoFab, _velMax, _canPue, _cantRue)
{
  super(_id, _modelo, _anoFab, _velMax);
  this.cantPue = _canPue;
  this.cantRue = _cantRue;

}

toString () {

  return `{Id:"${this.id}", modelo: "${this.modelo}",AnoFab:
  "${this.anoFab}", velMax: "${this.velMax}", cantPue: "${this.cantPue}", cantRue: "${this.cantRue}"}`;
}

}

var array = [];
let terrestre1 = new Terrestre(14,"Ferrari F100",1998,400,2,4);
array.push(terrestre1);
let terrestre2 = new Terrestre(51,"Dodge Viper",1991,266,2,4);
array.push(terrestre2);
let aereo1 = new Aereo(67,"Boeing CH-47 Chinook",1962,302,6,1200);
array.push(aereo1);
let terrestre3 = new Terrestre(666,"Aprilia RSV 1000 R",2004,280,0,2);
array.push(terrestre3);
let aereo2 = new Aereo(87,"Boeing 747-400",1989,988,13,13450);
array.push(aereo2);
let aereo3 = new Aereo(872,"Cessna CH-1 SkyhookR",1953,174,3,870);
array.push(aereo3);


let tabla = document.getElementById("tabla");
let secEncabezado = document.createElement("thead");
tabla.appendChild(secEncabezado);
let filaEncabezado = document.createElement("tr");
secEncabezado.appendChild(filaEncabezado);


let celda1 = document.createElement("th");
celda1.className = "Id";
filaEncabezado.appendChild(celda1);
let texto1 = document.createTextNode("Id");
celda1.appendChild(texto1);


let celda2 = document.createElement("th");
celda2.className = "Modelo";
filaEncabezado.appendChild(celda2);
let texto2 = document.createTextNode("Modelo");
celda2.appendChild(texto2);


let celda3 = document.createElement("th");
celda3.className = "AnoFab";
filaEncabezado.appendChild(celda3);
let texto3 = document.createTextNode("Año Fab");
celda3.appendChild(texto3);


let celda4= document.createElement("th");
celda4.className = "VelMax";
filaEncabezado.appendChild(celda4);
let texto4 = document.createTextNode("Vel Max");
celda4.appendChild(texto4);


let celda5= document.createElement("th");
celda5.className = "AltMax";
filaEncabezado.appendChild(celda5);
let texto5 = document.createTextNode("Alt Max");
celda5.appendChild(texto5);
$(celda5).hide();


let celda6= document.createElement("th");
celda6.className = "Autonomia";
filaEncabezado.appendChild(celda6);
let texto6 = document.createTextNode("Autonomia");
celda6.appendChild(texto6);
$(celda6).hide();


let celda7= document.createElement("th");
celda7.className = "CantPue";
filaEncabezado.appendChild(celda7);
let texto7 = document.createTextNode("Cant Pue");
celda7.appendChild(texto7);
$(celda7).hide();


let celda8= document.createElement("th");
celda8.className = "CantRue";
filaEncabezado.appendChild(celda8);
let texto8 = document.createTextNode("Cant Rue");
celda8.appendChild(texto8);
$(celda8).hide();


var tbody = document.createElement("tbody");
tabla.appendChild(tbody);

for (var i = 0; i < array.length; i++) {
  // Crea las hileras de la tabla

  let hilera = document.createElement("tr");

  let celdaId = document.createElement("td");
  celdaId.className = "Id";
  let textoCeldaId = document.createTextNode(array[i].id);
  celdaId.appendChild(textoCeldaId);
  hilera.appendChild(celdaId);

  let celdaModelo = document.createElement("td");
  celdaModelo.className = "Modelo";
  let textoCeldaModelo = document.createTextNode(array[i].modelo);
  celdaModelo.appendChild(textoCeldaModelo);
  hilera.appendChild(celdaModelo);

  let celdaAnoFab = document.createElement("td");
  celdaAnoFab.className = "AnoFab";
  let textoceldaAnoFab = document.createTextNode(array[i].anoFab);
  celdaAnoFab.appendChild(textoceldaAnoFab);
  hilera.appendChild(celdaAnoFab);

  let celdaVelMax = document.createElement("td");
  celdaVelMax.className = "VelMax";
  let textoCeldaVelMax = document.createTextNode(array[i].velMax);
  celdaVelMax.appendChild(textoCeldaVelMax);
  hilera.appendChild(celdaVelMax
);

  if(array[i] instanceof Aereo)
     {
      let celdaAltMax = document.createElement("td");
      celdaAltMax.className = "AltMax";
      let textoceldaAltMax = document.createTextNode(array[i].altMax);
      celdaAltMax.appendChild(textoceldaAltMax);
      hilera.appendChild(celdaAltMax);

      let celdaAutonomia = document.createElement("td");
      celdaAutonomia.className = "Autonomia";
      let textoceldaAutonomia = document.createTextNode(array[i].autonomia);
      celdaAutonomia.appendChild(textoceldaAutonomia);
      hilera.appendChild(celdaAutonomia);

      let celdaCantPue = document.createElement("td");
      celdaCantPue.className = "CantPue";
      let textoceldaCantPue = document.createTextNode("N/A");
      celdaCantPue.appendChild(textoceldaCantPue);
      hilera.appendChild(celdaCantPue);

      let celdaCantRue = document.createElement("td");
      celdaCantRue.className = "CantRue";
      let textoceldaCantRue = document.createTextNode("N/A");
      celdaCantRue.appendChild(textoceldaCantRue);
      hilera.appendChild(celdaCantRue);

      }
  else
  {
      let celdaAltMax = document.createElement("td");
      celdaAltMax.className = "AltMax";
      let textoceldaAltMax = document.createTextNode("N/A");
      celdaAltMax.appendChild(textoceldaAltMax);
      hilera.appendChild(celdaAltMax);

      let celdaAutonomia = document.createElement("td");
      celdaAutonomia.className = "Autonomia";
      let textoceldaAutonomia = document.createTextNode("N/A");
      celdaAutonomia.appendChild(textoceldaAutonomia);
      hilera.appendChild(celdaAutonomia);

      let celdaCantPue = document.createElement("td");
      celdaCantPue.className = "CantPue";
      let textoceldaCantPue = document.createTextNode(array[i].cantPue);
      celdaCantPue.appendChild(textoceldaCantPue);
      hilera.appendChild(celdaCantPue);

      let celdaCantRue = document.createElement("td");
      celdaCantRue.className = "CantRue";
      let textoceldaTelefono = document.createTextNode(array[i].cantRue);
      celdaCantRue.appendChild(textoceldaTelefono);
      hilera.appendChild(celdaCantRue);

      }

  // agrega la hilera al final de la tabla (al final del elemento tblbody)
  tbody.appendChild(hilera);
}



$(document).ready(function() {
  //al seleccionar en el select activa o desactiva una columna de la tabla segun el tipo
  $("#select").on("change",function(){
      var selectValor = $(this).val();
      if(selectValor == "Aereo")
      {
          $(".AltMax").show();
          $(".Autonomia").show();
          $(".CantPue").hide();
          $(".CantRue").hide();
      }
      else if(selectValor == "Terrestre")
      {
          $(".AltMax").hide();
          $(".Autonomia").hide();
          $(".CantPue").show();
          $(".CantRue").show();
      }
      else
      {
        $(".AltMax").show();
        $("Autonomia").show();
        $(".CantPue").show();
        $(".CantRue").show();
      }


  });
  //al seleccionar un checkbox activa o desactiva una columna de la tabla
  $("input:checkbox").attr("checked",true).click(function(){
      let columnName ="."+$(this).attr("name");
      $(columnName).toggle();

  });

  //Al tocar un td lleva al formulario
  $("#tabla").on("dblclick","td",function(){
      location.href ='./FORM.html';
  });

  //ordena las columnas de una tabla
  $('#tabla').on('click', 'th', function () {
    var index = $(this).index(),
        rows = [],
        thClass = $(this).hasClass('asc') ? 'desc' : 'asc';
    $('#tabla th').removeClass('asc desc');
    $(this).addClass(thClass);
    $('#tabla tbody tr').each(function (index, row) {
      rows.push($(row).detach());
    });
    rows.sort(function (a, b) {
      var aValue = $(a).find('td').eq(index).text(),
          bValue = $(b).find('td').eq(index).text();
      return aValue > bValue
           ? 1
           : aValue < bValue
           ? -1
           : 0;
    });
    if ($(this).hasClass('desc')) {
      rows.reverse();
    }
    $.each(rows, function (index, row) {
      $('#tabla tbody').append(row);
    });
  });

});

function AgregarVehiculo()
{
  location.href ='./FORM.html';
}

function CalcularVelocidadPromedio()
{
  let velocidades = [];
  array.forEach(element => {
       velocidades
    .push(element.velMax);
  });

 let sumaVelocidad = velocidades.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
 console.log(sumaVelocidad);
      document.getElementById("promedio").innerText = sumaVelocidad;
}
