
var carrera = ["Roberto", "Andrea", "Jorge", "Ramiro", "Sofía"];

carrera.shift();
carrera.shift();
carrera.splice(1,0,"Roberto", "Andrea" );
console.log(carrera);
carrera.splice(3,1);
console.log(carrera);
carrera.unshift("Ramiro");
console.log(carrera);
carrera.splice(2,1);
console.log(carrera);
carrera.splice(2,1);
console.log(carrera);
carrera.push("Andrea");
console.log(carrera);
carrera.push("Jose");

//Iterar para imprimir en consola el orden de los corredores
for(var i=1; i<carrera.length+1; i++){
console.log (i + ". Lugar: ", carrera[i-1]);
}