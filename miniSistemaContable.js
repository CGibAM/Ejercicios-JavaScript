//Se crea el objeto de empleado
class empleado {
    //Se definen los atributos del objeto empleado (nombre, edad,rfc,dias Trabajados, el sueldo diario), se declaran pero no se inicializan
    nombre;
    edad;
    rfc;
    diasTrabajados;
    sueldoDiario = 156.78;

    //Se añade como variable el isr para los calculos
    isr = 0.31;

    //Constructor que inicializa el objeto y recibe los datos sin valores (nombre, edad, rfc y dias trabjados)
    constructor(nombre, edad, rfc, diasTrabajados) {
        this.nombre = nombre;
        this.edad = edad;
        this.rfc = rfc;
        this.diasTrabajados = diasTrabajados;
    }

    //Metodos para el calculo del sueldo bruto mensual (sueldo diario por los dias trabajados en el mes)
    sueldoMesBruto() {
        var sueldoMes = (this.sueldoDiario * this.diasTrabajados);
        return sueldoMes;
    };

    //Metodos para el calculo del sueldo bruto neto mensual (el sueldo bruto por el porcentaje de descuento de isr, esto uyltimo es restado al sueldo bruto mensual)
    sueldoMesNeto() {
        var sueldoNetoMes = this.sueldoMesBruto() * this.isr
        return (this.sueldoMesBruto() - sueldoNetoMes);
    }

    //Metodos para el calculo del sueldo bruto quincenal (sueldo diario por los dias trabajados en la quincena)
    sueldoQuincenalBruto() {
        var sueldoQuincenal = (this.sueldoDiario * (this.diasTrabajados/2));
        return sueldoQuincenal;
    }

    //Metodos para el calculo del sueldo bruto neto quincenal (el sueldo bruto por el porcentaje de descuento de isr, esto uyltimo es restado al sueldo bruto quincenal)
    sueldoQuincenalNeto() {
        var sueldoNetoQuincenal = this.sueldoQuincenalBruto() * this.isr
        return this.sueldoQuincenalBruto() - sueldoNetoQuincenal;
    }

    //Mostrar los datos de los empleados en un alert
    mostarEmpleado() {
        alert(`Los Datos del empleado son.
Nombre: ${this.nombre},
Edad: ${this.edad},
RFC: ${this.rfc},
Dias Trabajados: ${this.diasTrabajados}.
El suelo mensual bruto es ${this.sueldoMesBruto()} pesos y neto ${this.sueldoMesNeto()} pesos,
El sueldo quincenal bruto es  ${this.sueldoQuincenalBruto()} pesos y neto ${this.sueldoQuincenalNeto()} pesos`)
    }

};


//Menú para añadir empleados, con una variable booleanba(exitMenu) para salir del menu
var exitMenu = false;
//Se añade una lista de empleados vacia para añadir un arreglo de empleados
var listaEmpleados = [];


//Menu con 3 opciones (añadir empleados, mostrar empleados y salir del programa(cambiando exitMenu por true))
while (exitMenu === false) {
    var menu = prompt(`Seleccione una opcion del menu:
                        1.-Añadir empleado
                        2.-Mostrar info de empleados añadidos
                        3.-Salir del programa`);

    //Con un switch le pasamos el input del usuario y lo parseamos a entero base 10
    switch (parseInt(menu, 10)) {

        //Si se selecciona 1 se piden los datos del empleado
        case 1:
            var nombreEmpleado = prompt("Ingrese el nombre del elmpeado:");
            var edadEmpleado = prompt("Ingrese la edad del elmpeado:");
            var rfcEmpleado = prompt("Ingrese el RFC del elmpeado:");
            var diasTrabajadosEmpleado = prompt("Ingrese los dias trabajados del elmpeado:");

            //Se añade al arreglo el nuevo empleado creado (usando las variables por medio de los prompts del usuario)
            listaEmpleados.push(new empleado(nombreEmpleado, edadEmpleado, rfcEmpleado, diasTrabajadosEmpleado));
            break;

        //Si no se ingrearon empleados mostrarar un mensaje, si se tiene 1 o mas mostarar el metodo de mostrarEmpleado() del objeto empleado. Se utiliza un map sobre la lista para recorrerla con una funcion externa que tiene una variable empleado que toma el valor de cada elemento de la variable listaEmpleados(que es un array), cada elemento es un objeto de la lista empleado, por lo que para cada elemento de la lista se llama el metodo mostrarEMpleado()
        case 2:
            if (listaEmpleados === null) {
                alert("Sin datos de empleado");
            } else {
                listaEmpleados.map(function (empleado) { empleado.mostarEmpleado() });
            }
            break;

            //Se agrega un case que cambia la variable exitMenu a true para salir del menu while (exitMenu = false, por defecto)
        case 3:
            exitMenu = true;
            break;
        
        //Un default por si el usuario selecciona una opcion no especificada del menu (Opciones disponibles, 1, 2 o 3)
        default:
            alert("Seleccione una opcion valida del menu");
            break;

    }
};
