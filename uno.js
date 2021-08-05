function mostrar() {
  /*Se necesita llevar el registro de un vacunatorio. Para ello se podrá registrar los datos de las personas vacunadas mientras el usuario quiera.
De cada vacunado se solicita:
-nombre (entre 3 y 10 caracteres)
-edad ( mayor o igual a 12)
-vacuna (“rusa”, “china”, “americana”)
Si la edad esta entre 12 y 17 años ambos incluidos solo se permite la vacuna americana
-dosis (“p” en caso de ser la primer dosis o “s” en caso de ser la segunda dosis)
-sexo( “f” o “m” )
Informar:
a- Promedio de edad de los que se vacunaron con la china
b- Nombre y vacuna de la hombre con más joven
c- De las personas que recibieron la vacuna americana que porcentaje son menores de edad
d- Porcentaje de los que están vacunados con 1 dosis sobre el total de vacunados
e- Vacuna mas inoculada */

  //declaro variables

  let nombre;
  let edad;
  let vacuna;
  let dosis;
  let sexo;
  let seguir;
  let contadorVacunado = 0;
  let acumChina = 0;
  let contadorC = 0;
  let contadorA = 0;
  let contadorR = 0;
  let flagJoven = 1;
  let edadJoven;
  let nombreJoven;
  let contadorAmericana = 0;
  let contadorAmerMenor = 0;
  let contadorDosisP = 0;
  let promedioChina;
  let vacunaInoculada;
  let porcAmericana = 0;

  do {
    nombre = prompt("Ingrese el nombre de la persona vacunada (entre 3 y 10 caracteres): ");
    while (!(nombre.length >= 3 && nombre.length <= 10)) {
		nombre = prompt("Nombre inválido. Reingréselo: ");
    }

    edad = parseInt(prompt("Ingrese la edad de la persona vacunada (12 años o más): "));
    while (!(edad >= 12)) {
      edad = parseInt(prompt("Edad inválida. Reingrésela: "));
    }

    if (edad >= 12 && edad <= 17) {
	  vacuna = "americana";
      alert("Se seleccionó la vacuna americana por defecto ya que la persona ingresada tiene entre 12 y 17 años.");
    } else {
      vacuna = prompt("Ingrese la vacuna que fue dada (rusa/china/americana): ").toLowerCase();
      while (vacuna != "rusa" && vacuna != "china" && vacuna != "americana") {
    	vacuna = prompt("Vacuna ingresada inválida. Reingréela: ").toLowerCase();
      }
    }

    dosis = prompt("Ingrese 'p' en caso de ser la primera dósis y 's' en caso de ser la segunda: ").toLowerCase();
    while (dosis != "p" && dosis != "s") {
      dosis = prompt("Dósis ingresada inválida. Reingrésela: ").toLowerCase();
    }

    sexo = prompt("Ingrese el sexo de la persona (f/m): ").toLowerCase();
    while (sexo != "f" && sexo != "m") {
      sexo = prompt("Sexo ingresado inválido. Reingréselo: ").toLowerCase();
    }

    contadorVacunado++;

    if (vacuna == "china") {
      acumChina += edad;
      contadorC++;
    } else if (vacuna == "americana") {
      contadorA++;
    } else {
      contadorR++;
    }

    if (sexo == "m") {
      if (flagJoven || edad < edadJoven) {
        flagJoven = 0;
        edadJoven = edad;
        nombreJoven = nombre;
        vacunaJoven = vacuna;
      }
    }

    if (vacuna == "americana") {
      contadorAmericana++;
      if (edad >= 12 && edad <= 17) {
        contadorAmerMenor++;
      }
    }

    if (dosis == "p") {
      contadorDosisP++;
    }

    if (contadorC > contadorA && contadorC > contadorR) {
      vacunaInoculada = "china";
    } else if (contadorA > contadorC && contadorA > contadorR) {
      vacunaInoculada = "americana";
    } else {
      vacunaInoculada = "rusa";
    }

    seguir = prompt("Quiere seguir ingresando personas? (s/n)").toLowerCase();
    while (seguir != "s" && seguir != "n") {
      seguir = prompt("Entrada no válida. Reingrésela: ");
    }

  } while (seguir == "s");

  promedioChina = acumChina / contadorC;
  porcAmericana = (contadorAmerMenor / contadorAmericana) * 100;
  porcDosisP = (contadorDosisP / contadorVacunado) * 100;

  if (contadorC != 0) {
    document.write("a) Promedio de edad de de gente vacunada por la vacuna china: " + promedioChina + "<br>");
  }

  document.write("b) El nombre del hombre más joven vacunado es: " + nombreJoven + " y tiene " + edadJoven + " años." + "<br>");

  if (contadorAmerMenor) {
	  document.write("c) El porcentaje de menores de edad que recibió la vacuna americana sobre el total es de " + porcAmericana.toFixed(2) + "%" + "<br>");
  }

  document.write("d) El porcentaje de personas vacunadas con 1 dosis sobre el total es de " + porcDosisP.toFixed(2) + "%" + "<br>" + "e) La vacuna más inoculada es: " + vacunaInoculada);
}
