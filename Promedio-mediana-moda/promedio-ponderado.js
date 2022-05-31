// EJERCICIO PROMEDIO PONDERADO JS
//1-Definir el conjunto de números junto al peso de cada elemento
const notes = [
  {
    course: "Física",
    note: 10,
    credit: 3,
  },
  {
    course: "Programción",
    note: 8,
    credit: 5,
  },
  {
    course: "Finanzas Personales",
    note: 6,
    credit: 4,
  },
];

// 2-Multiplicar cada número de la lista por su peso
const noteWithCredit = notes.map(function (objectValue) {
  return objectValue.note * objectValue.credit;
});

// 3-Sumar todos los elementos del arreglo de elementos multiplicados por su peso
const sumOfNotesWithCredit = noteWithCredit.reduce(function (
  previusValue,
  currenValue
) {
  return previusValue + currenValue;
},
0);

// 4-Sumar todos los pesos (créditos)
const credits = notes.map(function (objectValue) {
  return objectValue.credit;
});
const sumOfCredit = credits.reduce(function (previusValue, currenValue) {
  return previusValue + currenValue;
}, 0);

// 5-Hacer la división entre ambas “sumas”
const premedioPonderado = sumOfNotesWithCredit / sumOfCredit;
