let letras = [
  "T",
  "R",
  "W",
  "A",
  "G",
  "M",
  "Y",
  "F",
  "P",
  "D",
  "X",
  "B",
  "N",
  "J",
  "Z",
  "S",
  "Q",
  "V",
  "H",
  "L",
  "C",
  "K",
  "E",
  "T",
];

let retornarletras = () => {
  let dni = parseInt(prompt("Ingrese su DNI: "));
  let caracter = prompt("Ingrese una letra: ");

  if (dni >= 0 && dni <= 99999999) {
    retornar = letras[dni % 23];
    if (caracter == retornar) {
      alert(`El DNI es ${dni} y la letra es ${retornar}`);
    } else {
      alert(`La letra ${caracter} ingresada no coincide con ${retornar}`);
    }
  } else {
    alert("El numero no es valido");
  }
};
retornarletras();
