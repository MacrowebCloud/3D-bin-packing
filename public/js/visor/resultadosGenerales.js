

function resultadosGenerales(){
  
  Cantidad_cont_resumen();
  Cantidad_total_de_bultos();
  Peso_total_de_bultos();
  volumen_paquetes();

  Volumendelcontenedordisponible();
  Pesodisponibleenelcontenedor();
  Pesomaximopermitidoalcargarenelcontenedor();
  Volumendelcontenedordisponibleovacio();
  Volumendelcontenedorusableaproximado();
}





function Cantidad_cont_resumen(){
  var Cantidad_de_contenedor_tipo = "";
  var cont20 = 0;
  var cont40 = 0;

  for(var i = 0; i <Boxes.box.length; i++){
    if(/20 pies/.test(Boxes.box[i].name)){
      cont20 +=  1;
    }
    else if(/40 pies/.test(Boxes.box[i].name)){
      cont40 +=  1;
    }

    
  }

  

  // 
  if(cont20 != 0){
    Cantidad_de_contenedor_tipo +=  "<p>" + cont20 + " x Contendeor de 20 pies. </p>";
  }
  if(cont40 != 0){
    Cantidad_de_contenedor_tipo +=  "<p>" + cont40 + " x Contendeor de 40 pies. </p>" ;
  }

  

  // cuantos contenedores son 
  $("#Cantidad_cont_resumen").html(Cantidad_de_contenedor_tipo)
}

function Cantidad_total_de_bultos(){
  var cont = 0;

  for(var i = 0; i <Boxes.box.length; i++){
    cont += Boxes.box[i].total_paquetes;
  }

  $("#cantitad_total_de_paquetesTabla").html(cont)
}

function Peso_total_de_bultos(){
  var cont = 0;

  for(var i = 0; i <Boxes.box.length; i++){
    cont += Boxes.box[i].peso_total_paquetes;
  }

  $("#pesoTotal").html(cont)
}

function volumen_paquetes(){
  var cont = 0;
  var detalle = "";

  for(var i = 0; i <Boxes.box.length; i++){
    cont += parseFloat(Boxes.box[i].volumen_paquetes);
  }

  detalle = `
    <p> ${cont} cm<sup>3</sup>. </p>
    <p> ${conversor.cm3_a_m3(cont)} m<sup>3</sup>.</p>
    <p> ${conversor.cm3_a_pies3(cont)} pies<sup>3</sup>.</p>`;
  $("#volumen_paquetes").html(detalle);


}


function Volumendelcontenedordisponible(){

  var detalle = "";
  for(var i = 0; i <Boxes.box.length; i++){
    var volumenContainer = ((Boxes.box[i].d * Boxes.box[i].h *  Boxes.box[i].w) - Boxes.box[i].volumen_paquetes );
    detalle += `<p class="pl-3"> <span class="font-weight-bold"> ${Boxes.box[i].name}:</span> ${volumenContainer} cm<sup>3</sup></p>`
  }



  $("#Volumendelcontenedordisponible").html(detalle);


}

function Pesodisponibleenelcontenedor(){

  var detalle = "";
  for(var i = 0; i <Boxes.box.length; i++){
    var peso = (Boxes.box[i].peso_maximo_container - Boxes.box[i].peso_total_paquetes);

    detalle += `<p class="pl-3"> <span class="font-weight-bold"> ${Boxes.box[i].name}:</span> ${peso} kg</p>`
  }

  $("#Pesodisponibleenelcontenedor").html(detalle);
}

function Pesomaximopermitidoalcargarenelcontenedor(){
  var detalle = "";
  for(var i = 0; i <Boxes.box.length; i++){
    detalle += `<p class="pl-3"> <span class="font-weight-bold"> ${Boxes.box[i].name}:</span> ${Boxes.box[i].peso_maximo_container} kg</p>`
  }

  $("#Pesomaximopermitidoalcargarenelcontenedor").html(detalle);
}

function Volumendelcontenedordisponibleovacio(){
  var detalle = "";
  for(var i = 0; i <Boxes.box.length; i++){

    var vol_cont = (Boxes.box[i].d * Boxes.box[i].h * Boxes.box[i].w);
  
    detalle += `<p class="pl-3"> <span class="font-weight-bold"> ${Boxes.box[i].name}:</span> ${ conversor.cm3_a_m3(vol_cont) } m<sup>3</sup>.</p>`
  }

  $("#Volumendelcontenedordisponibleovacio").html(detalle);
}

function Volumendelcontenedorusableaproximado(){
  var detalle = "";
  for(var i = 0; i <Boxes.box.length; i++){

    var vol_cont = (Boxes.box[i].d * Boxes.box[i].h * Boxes.box[i].w);
  
    detalle += `<p class="pl-3"> <span class="font-weight-bold"> ${Boxes.box[i].name}:</span> ${ conversor.cm3_a_m3(vol_cont - 5276000) } m<sup>3</sup>.</p>`
  }

  $("#Volumendelcontenedorusableaproximado").html(detalle);
}

