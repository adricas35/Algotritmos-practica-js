
// funcion que realiza una suma entre 2 dos numeros

function suma(){
    let N1=0;
    let N2=0;
    let suma=0;  
    alert("Realiza una suma con los valores ingresados por el usuario");
N1= parseInt(prompt("Ingrese el primer a sumar valor"));
N2= parseInt(prompt("ingrese el segundo valor a sumar"));
suma = N1+N2;
alert("El resultado de la suma es " + suma);
}


// funcion que realize operaciones basicas

function operacionesBasicas(){
    let A=0;
    let B=0;
    let suma=0;
    let resta=0;
    let multiplicacion=0;
    let division=0;
    alert("Realiza una suma, resta, multiplicacion y divicion entre los dos valores ingresados por el usuario");
    A= parseInt(prompt("Ingrese el primer valor"));
    B= parseInt(prompt("ingrese el segundo valor"));
    suma = A+B;
    resta = A-B;
    multiplicacion = A*B;
    division = A/B;
    alert(" El resultado de la suma es " + suma + " El resultado de la resta es " + resta + " El resultado de la multiplicacion es " + multiplicacion + " El resultado de la division es " + division)

}


// funcion que va hallar el numero al cuadrado que ingrese el usuario

function cuadrado(){

    let valor = 0;
    let multiplicacion = 0;
    alert(" Algoritmo que determine el cuadrado de un numero ingresado por el usuario ");
    valor= parseInt(prompt(" Ingrese el primer valor: "));
    multiplicacion = valor * valor;
    alert(" El resultado de multiplicacion es: " + multiplicacion);
}


// funcion que determine los cm y pulgadas de un valor dado en metros

function conversionesUnidades(){

    let cm=0;
    let pulgadas=0;
    let metros=0;
    alert("Realiza un algoritmo que determine los cm y pulgadas de un valor dado en metros");
    metros=parseInt(prompt("Ingrese el valor en metros "));
    cm = metros*100;
    pulgadas = metros*39,37;
    alert(" El resultado en cm es: " + cm + " El resultado en pulgadas es: " + pulgadas);
}


// funcion que halle el area de un triangulo con los valores ingresados por el usuario

function areaTriangulo(){
    let base=0;
    let altura=0;
    let area=0;
    alert("Determine el area de un triangulo con la base y la altura ingresados por el usuario");
    base=parseInt(prompt(" Ingrese el valor de base "));
    altura=parseInt(prompt(" ingrese el valor de altura "));
    area = base*altura/2;
    alert(" El resultado del triangulo en area es: " + area );
}


// funcion para hallar una inversion a futuro dependiendo de los anios y el capital ingresados por el usuario

function inversionDeCapital(){
    let anios = 0;
    let capital = 0;
    let interes = 0.017;
    let ganancia = 0;
    let gananciaTotal = 0;
    alert("Realiza un algoritmo para determinar la ganancia final de una inversion de capital a una cantidad de años que indique el cliente a un interes mensual de 1.7 % ")
    anios = parseInt(prompt(" Ingrese los anios deseados para tal inversion "));
    capital = parseInt(prompt("Ingrese el valor del capital"));
    ganancia = anios*(12*(capital*interes));
    gananciaTotal = ganancia + capital;
    alert("La ganancia es de " + ganancia + " para una ganancia total de " + gananciaTotal);
}


// funcion para hallar el numero mayor de dos valores ingresados por el usuario

function numeroMayor(){

    let valor1 = 0;
    let valor2 = 0;
    alert("Realiza un algoritmo para hallar el numero mayor entre dos numeros ingresados por el usuario");
    valor1 = parseInt(prompt("Ingrese el primer valor "));
    valor2 = parseInt(prompt("Ingrese el segundo valor "));
    if (valor1 == valor2){
        alert("Ambos numeros son iguales ");
    }
    else if(valor1 > valor2){
        alert("El numero mayor es " + valor1);
    }
    else {
        alert("El numero mayor es " + valor2);
    }
}


// funcion que determine el numero menor de tres numeros ingresados por el usuario

function numeroMenor(){
    let valor1 = 0;
    let valor2 = 0;
    let valor3 = 0;
    alert("Realiza un algoritmo que halle el numero menor de tres posibles, que son ingresados por el usuario");
    valor1 = parseInt(prompt("Ingrese el primer valor"));
    valor2 = parseInt(prompt("Ingrese el segundo valor"));
    valor3 = parseInt(prompt("Ingrese el tercer valor"));
    if ((valor1 == valor2) && (valor1 == valor3)){
        alert("Los tres numeros son iguales ");
    }
    else if ((valor1 < valor2) && (valor1 < valor3)){
        alert("El numero menor es " + valor1); 
    }
    else if ((valor2 < valor1) && (valor2 < valor3)){
        alert("El numero menor es "+ valor2);
    }
    else{
        alert("El numero menor es ") + valor3;
    }
}


// funcion para validar si el numero ingresado por el usuario es par o impar

function numeroParOImpar(){
    let valor1 = 0;
    alert("Determine si un numero ingresado por el usuario es par o impar ");
    valor1 = parseInt(prompt("Ingrese el valor "));
    if (valor1 % 2 === 0){
        alert("El numero ingresado  " + valor1 + " es par ");
    }
    else {
        alert("El numero ingresado  " + valor1 + " es impar ");
    }   
}


// funcion para hallar el promedio de un numero de notas del estudiante en la materia de ingles

function promedioEstudiante(){
    let nota1 = 0;
    let nota2 = 0;
    let nota3 = 0;
    let nota4 = 0;
    let nota5 = 0;
    let nota6 = 0;
    let nota7 = 0;
    let promedio = 0;
    alert("Algorimo para calcular el promedio de 7 notas de la materia de ingles de un estudiante y determinar si aprueba o reprueba la clase, esto se logra con las 7 calificaciones que irnande 1 a 5, donde ereprueba entre 0 a 2.9 y aprueba si es superios o igual a 3");
    nota1 = parseInt(prompt("Ingresa la calificacion numero 1"));
    nota2 = parseInt(prompt("Ingresa la calificacion numero 2"));
    nota3 = parseInt(prompt("Ingresa la calificacion numero 3"));
    nota4 = parseInt(prompt("Ingresa la calificacion numero 4"));
    nota5 = parseInt(prompt("Ingresa la calificacion numero 5"));
    nota6 = parseInt(prompt("Ingresa la calificacion numero 6"));
    nota7 = parseInt(prompt("Ingresa la calificacion numero 7"));
    promedio = (nota1 + nota2 + nota3 + nota4 + nota5 + nota6 + nota7) / 7;

    if (promedio >= 3){
        alert("El estudiante aprobo la materia con una nota de: " + promedio);
    } else {
        alert("El estudiante reprobo la materia con una nota de: " + promedio);
    }
}

// funcion para hallar el promedio de un numero de notas de los estudiantes ejercicio dos

function promedioEstudiantes2(){
    let materia = "";
    let estudiante = "";
    let nNotas = 0;
    let calificacion = 0;
    let sumaNotas = 0;
    let promedio = 0;
    let interacion = 0;
    materia = prompt("Ingrese la materia que imparta" );
    estudiante = prompt("Ingrese el nombre del estudiante " );
    nNotas = parseInt(prompt("Ingrese el numero de notas o calificaciones " ));
    while(interacion < nNotas){
        calificacion = parseFloat(prompt("Ingrese las calificaciones " ));
        sumaNotas = sumaNotas + calificacion;
        interacion = interacion + 1;
    }

    promedio = sumaNotas/nNotas;
    if (promedio>2.9){
        alert(" El estudiante " + estudiante + " aprobo la materia de " + materia + " con un promedio de: " + promedio);

    }
    
    else{
        alert("El estudiante reprobo la materia con una nota de: " + promedio);
    }
}



//funcion para determinar el valor que debe pagar un cliente al comprar una cantidad de kilos de fruta y dependiendo de los kilos comprados tendra la posibilodad de adquirir descuentos

function fruteria(){
    let kilos = 0;
    const valor = 4500;
    alert("Algoritmo para determinar el valor que debe pagar un cliente al comprar un cantidad de kilos de fruta, dependiendo de los kilos comprados tendra la posibilidad de adquirir descuentos ")
    kilos = parseInt(prompt("Ingresa el numero de kilos que compro el cliente "));
    const valorPagar = kilos * valor;

    if (kilos <= 2){
        alert("El valor total a pagar es: " + valorPagar);
    } else if (kilos <= 5){
        const descuento = valorPagar * 0.10;
        const valorTotal = valorPagar - descuento;
        alert("El valor total a pagar es: " + valorTotal);
    } else if (kilos <= 9){
        const descuento = valorPagar * 0.15;
        const valorTotal = valorPagar - descuento;
        alert("El valor total a pagar es: " + valorTotal);
    } else if (kilos >= 10){
        const descuento = valorPagar * 0.20;
        const valorTotal = valorPagar - descuento;
        alert("El valor total a pagar es: " + valorTotal);
    }      
}


// funcion para calcular el salario semanal de un obrero 

function horasExtras(){
    let salario = 0;
    let horasTrabajadas = 0;
    const valorHora = 10000;
    const valorHoraExtra = 20000;
    alert("Algoritmo para calcular el salario semanal de un obrero, el cual se obtiene de la siguiente manera, si trabaja 40 horas o menos se le paga 10000 por hora, si trabaja mas de 40 horas se le paga 10000 por cada una de las primeras 40 horas y 20000 por cada hora extra" );
    horasTrabajadas = parseInt(prompt("Ingrese el numero de horas trabajadas "));

    if (horasTrabajadas <= 40){
        salario = horasTrabajadas * valorHora;
      
    } else {
        const horasExtras = horasTrabajadas - 40;
        const valorHorasTrabajadas = valorHora * 40;
        const valorExtraTrabajada = valorHoraExtra * horasExtras;
        salario = valorHorasTrabajadas + valorExtraTrabajada;        
    }
    alert("El salario del obrero es de: " + salario)
}


//funcion para solicitar al usuario numeros enteros mayores a cero y calcular el total ingresado y se solicitara valores enteros hasta que se ingrese el numero cero

function sumaNumerosDiferntesACero(){
    let valor = 0;
    let estado = true;
    let valorAcumulado = 0;
    alert("Algoritmo que sume los numeros ingresados por el usuario, hasta que ingree el numero cero ");
    while (estado === true){
        valor = parseInt(prompt("Ingrese un valor "));
        if (isNaN(valor)) {
            alert("El valor ingresado no es numero valido. ");
            continue; 
        }

        if (valor > 0 ){
            valorAcumulado = valorAcumulado + valor;

        } else{
            estado = false;
        }
    }
    alert("El valor acumulado es de: " + valorAcumulado);
}



// funcion que imprima los numeros del 1 al 10

function imprimirDe1A10(){
    let contador = 1
    alert("Algoritmo que muestre los numeros del 1 al 10");
    while (contador <= 10){
        alert("El valor del contador es igual a: " + contador);
        contador = contador + 1;
    } 
}


//  funcion que imprima los numeros del 100 al 0 pero de 10 en 10

function imprimirDe100A0(){
    let contador = 100;
    alert("Algoritmo que muestre los numeros del 100 al 0 pero de 10 en 10");
    while (contador > 0){
        alert("El valor del contador es igual a: " + contador);
        contador = contador - 10;
    }
}


// funcion que debe pedir un numero y mostrar su tabla de multiplicar de 1 a 10

function tablaDeMultiplicar(){
    let valor = 0;
    alert("Algoritmo que crea la tabla de multiplicar de 1 a 10");
    valor = parseInt(prompt("Ingrese el valor "));
    if (isNaN(valor)) {
        alert("El valor ingresado no es numero valido. ");
        return; 
    } 
    for(let contador = 1; contador <= 10; contador++){
        const resultado = valor * contador;
        alert("El valor: " + valor + " Multiplicado por " + contador + " Es igual a: " + resultado);
    }
}


// funcion simulador de cajero electronico, este comenzara con un saldo de 1000000 y permitir retirar al usuario dinero hasta que el usuario se quede sin saldo

function simuladorCajero(){
    let monto = 0;
    let saldo = 1000000;
    alert("Algoritmo que simule un cajero automatico, el cajero tendra un monto inicial de un 1000000 y el usuario ira haciendo retiros hasta que se quede sin saldo ");
    while ( saldo > 0){
        monto = parseInt(prompt("Ingrese el valor a retirar: "));
        if (isNaN(monto)) {
            alert("El valor ingresado no es numero valido. ");
            continue; 
        }
        if (monto > saldo){
            alert("No se puede hacer el retiro por saldo insuficiente, su saldo es de $ " + saldo);
            continue;

        } else {
            saldo = saldo - monto;
            alert("Se ha realizado su retiro con exito, su nuevo saldo es de: $ " + saldo);
        }
        
    }
    alert("Tu saldo es de 0 ");
    alert("Gracias por utilizar nuestro cajero, hasta pronto. ");
}


// funcion que imprima los numeros de 100 en 100 hasta 1000

function numeroHasta1000De100En100(){
    let valor = 100;
    alert("Algoritm que muestre en pantalla los numeros de 100 en 100 hasta 1000");
    while (valor <= 1000){
        alert("El valor del contador es igual a: " + valor);
        valor = valor + 100;
    }
}
