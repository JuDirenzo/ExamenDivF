function mostrar()
{
    /*El centro de hisopado de Ezeiza recibe una tripulación de 8 personas.
Al ser hisopadas se ingresan sus datos en la aplicación:
-nacionalidad ("argentino", "extranjero")
-resultado("positivo", "negativo")
-edad(entre 18 y 65)
-cepa("delta", "alfa", "beta", "ninguna")
Para poder ingresar ninguna el resultado debe ser negativo
Luego del ingreso informar:
a- Porcentaje de positivos
b- Porcentaje de negativos
c- Cuál es la cepa menos encontrada
d- Edad del menor argentino contagiado
e- Cantidad de personas extranjeras contagiadas con la delta
*/

let nacionalidad;
let resultado;
let edad;
let cepa;
let contadorPersona = 0;
let contadorNegativo = 0;
let contadorPositivo = 0;
let porcNegativo = 0;
let porcPositivo = 0;
let contadorD = 0;
let contadorA = 0;
let contadorB = 0;
let cepaMenor;
let flagJoven = 1;
let edadArgentino;
let contadorExtDelta = 0;



    for (let i = 0; i < 8; i++) {
        nacionalidad = prompt("Ingrese la nacionalidad de la persona (argentino/extranjero): ").toLowerCase();
        while (nacionalidad != "argentino" && nacionalidad != "extranjero") {
            nacionalidad = prompt("Nacionalidad ingresada no válida. Reingrésela (argentino/extranjero): ").toLowerCase();
        }

        resultado = prompt("Ingrese el resultado del hisopado (positivo/negativo): ").toLowerCase();
        while (resultado != "positivo" && resultado != "negativo") {
            resultado = prompt("Resultado inválido. Reingréselo (positivo/negativo): ").toLowerCase();
        }

        edad = parseInt(prompt("Ingrese la edad (entre 18 y 65 años): "));
        while (!(edad >= 18 && edad <= 65)) {
            edad = parseInt(prompt("Edad inválida. Reingrésela (entre 18 y 65 años): "));
        }

        contadorPersona ++;

        if (resultado == "negativo") { 
            contadorNegativo ++;
            cepa = "ninguna";
            alert("No se seleccionará ninguna cepa ya que la persona ingresada dio el resultado como negativo.")
        } else {
            contadorPositivo ++;
            cepa = prompt("Ingrese la cepa (delta/alfa/beta): ").toLowerCase();
            while (cepa != "delta" && cepa != "alfa" && cepa != "beta") {
            cepa = prompt("Cepa ingresada no válida. Reingrésela (delta/alfa/beta): ").toLowerCase();
        }  
        }
        
        switch (cepa) {
            case "delta":
            contadorD ++;
            case "alfa":
            contadorA ++;
            case "beta":
            contadorB ++;
        }

        if (contadorD < contadorA && contadorD < contadorB) {
            cepaMenor = "delta";
        } else if (contadorA < contadorD && contadorA < contadorB) {
            capaMenor = "alfa";
        } else {
            capaMenor = "beta";
        }

        if (nacionalidad == "argentino") { 
            if (flagJoven || edad < edadArgentino) {
            flagJoven = 0;
            edadArgentino = edad;
        }
        }

        if (nacionalidad == "extranjero" && cepa == "delta") {
            contadorExtDelta ++;
        }
    }

    porcPositivo = contadorPositivo / contadorPersona * 100;
    porcNegativo = contadorNegativo / contadorPersona * 100;


document.write("a) El porcentaje de positivos es de " + porcPositivo.toFixed(2) + "%" + " <br> " +
"b) El porcentaje de negativos es de " + porcNegativo.toFixed(2) + "%" + " <br> " +
"c) La cepa menos encontrada fue la " + cepaMenor + " <br> " +
"d) El menor argentino contagiado cuenta con " + edadArgentino + " años." + " <br> ")

if (contadorExtDelta) {
document.write("e) La cantidad de personas extranjeras contagiadas por la cepa delta es de " + contadorExtDelta);
}
}
