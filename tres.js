function mostrar() {
  /*Llegan vuelos con vacunas de distintos lugares del mundo
Mientras el usuario quiera se debe registrar de cada vuelo:
-Origen (“Oriente”, “Occidente”, “Secreto”)
-Cantidad de vacunas (entre 500000 y 2500000)
-Costo del vuelo (entre 1 millón y 5 millones de pesos)
Informar:
	a- El origen que envió menor cantidad de vacunas
	b- El promedio por vuelo de vacunas llegadas de Occidente
	c- El total sin descuentos a pagar por los gastos de los viajes
	d- Si en total se recibieron mas de 10 millones de vacunas se hace un descuento de 25%, Si se recibieron entre 5 y 10 millones el descuento es del 15% con menor cantidad no hay descuento.
	Informar si hubo descuento de cuanto fue y el importe final con descuento
*/

  let origen;
  let cantidadVacunas;
  let costoVuelo;
  let flagMinVacunas = 1;
  let minVacunas;
  let minOrigen;
  let acumCantidadVacunas = 0;
  let contadorOcc = 0;
  let acumVacunasOcc = 0;
  let promVacunasOcc = 0;
  let importeBruto = 0;
  let importeNeto = 0;
  let porcDescuento;

  do {
    origen = prompt("De dónde vienen las vacunas? (oriente/occidente/secreto) ").toLowerCase();
    while (origen != "oriente" && origen != "occidente" && origen != "secreto") {
      origen = prompt("Origen inválido. Reingréselo (oriente/occidente/secreto): ");
    }

    cantidadVacunas = parseInt(prompt("Ingrese la cantidad de vacunas (entre 500000 y 2500000): "));
    while (!(cantidadVacunas >= 500000 && cantidadVacunas <= 2500000)) {
      cantidadVacunas = parseInt(prompt("Cantidad inválida. Reingrésela (entre 500000 y 2500000): "));
    }

    costoVuelo = parseInt(prompt("Ingrese el costo del vuelo (entre 1 millón y 5 millones de pesos): "));
    while (!(costoVuelo >= 1000000 && costoVuelo <= 5000000)) {
      costoVuelo = parseInt(prompt("Costo inválido. Reingréselo (entre 1 millón y 5 millones de pesos): "));
    }

    importeBruto += costoVuelo;
	acumCantidadVacunas += cantidadVacunas;

    if (flagMinVacunas || acumCantidadVacunas < minVacunas) {
      flagMinVacunas = 0;
      minVacunas = acumCantidadVacunas;
      minOrigen = origen;
    }

    if (origen == "occidente") {
      contadorOcc++;
      acumVacunasOcc += cantidadVacunas;
    }
	
	seguir = prompt("Quiere seguir ingresando vuelos? (s/n) ").toLowerCase();
    while (seguir != "s" && seguir != "n") {
		seguir = prompt("Entrada no válida. Reingrésela: ");
    }

  } while (seguir == "s");


  promVacunasOcc = acumVacunasOcc / contadorOcc;

  document.write("a) El origen que envió menos vacunas es " + minOrigen + "<br" + 
  "c) El total a pagar sin descuentos es de $" + importeBruto + "<br"); 

  if (cantidadVacunas > 10000000) {
	porcDescuento = "25%";
	descuento = importeBruto * 0.25;
	importeNeto = importeBruto - descuento;
  } else if (cantidadVacunas >= 5000000 && cantidadVacunas <= 10000000) {
	porcDescuento = "15%";
	descuento = importeBruto * 0.15;
	importeNeto = importeBruto - descuento;
  }

  if (contadorOcc) {
    document.write("b) El promedio de vacunas por vuelo que llegaron de Occidente es: " + promVacunasOcc + "<br");
  }

  if (importeNeto) { 
  ("d) El total a pagar es de $" + importeNeto + " aplicando un " + porcDescuento + " de descuento.");
  }
}
