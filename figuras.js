// CÓDIGO DEL CUADRADO
console.group("Cuadrados");

function perimetroCuadrado(lado) {
  return lado * 4;
}

function areaCuadrado(lado) {
  return lado * lado;
}
console.groupEnd();

// CÓDIGO DEL TRIÁNGULO
console.group("Triangulos");
function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

console.groupEnd();

// CÓDIGO DEL CIRCULO
console.group("Círculos");

//Diametro
function diametroCirculo(radio) {
  return radio * 2;
}
//PI
const PI = Math.PI;
//Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}
//Area
function areaCirculo(radio) {
  return radio * radio * PI;
}
console.groupEnd();

// Aquí interactuamos con el HTML
function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}
function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}

// Triángulo

function calcularPerimetroTriangulo() {
  const inputA = document.getElementById("InputTrianguloA");
  const valueA = Number(inputA.value);
  const inputB = document.getElementById("InputTrianguloB");
  const valueB = Number(inputB.value);
  const inputBase = document.getElementById("InputTrianguloBase");
  const valueBase = Number(inputBase.value);

  const perimetro = perimetroTriangulo(valueA, valueB, valueBase);
  alert(perimetro);
}

function calcularAreaTriangulo() {
  const inputBase = document.getElementById("InputTrianguloBase");
  const valueBase = Number(inputBase.value);
  const inputAltura = document.getElementById("InputTrianguloAltura");
  const valueAltura = Number(inputAltura.value);

  const area = areaTriangulo(valueBase, valueAltura);
  alert(area);
}

// CIRCULO
function calcularPerimetroCirculo() {
  const inputCirculo = document.getElementById("InputCirculo");
  const valueRadio = Number(inputCirculo.value);

  const perimetro = perimetroCirculo(valueRadio);
  alert(perimetro);
}

function calcularAreaCirculo() {
  const inputCirculo = document.getElementById("InputCirculo");
  const valueRadio = Number(inputCirculo.value);

  const area = areaCirculo(valueRadio);
  alert(area);
}
