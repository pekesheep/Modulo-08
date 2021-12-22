//VALIDAR IBAN
var iban = "ES6600190020961234567890";
var iban2 = "ES66 0019 0020 9612 3456 7890";

const PATTERN1 = /^[A-Z]{2}\d{22}$/;
const PATTERN2 = /^([A-Z]{2})\d{2}\s?\d{4}\s?\d{4}\s?(\d{2})\d{2}\s?\d{4}\s?\d{4}$/;

console.log("VALIDAR IBAN");
console.log("Caso 1");
console.log(PATTERN1.test(iban));

console.log("Caso 2");
console.log(PATTERN2.test(iban));
console.log(PATTERN2.test(iban2));

console.log("Caso 3");
var substract = iban2.match(PATTERN2);
console.log("Código del pais:", substract[1]);
console.log("Digito de control:", substract[2]);

//VALIDAR MATRICULA DE COCHE
var plates = ["2021 GMD", "2345-GMD", "4532BDB", "0320-AAA"];
const PATTERN3 = /^(\d{4})(\s?||-)([A-Z]{3})$/;

console.log("\nVALIDAR MATRICULAS");
console.log("Caso 1");
plates.forEach(value => console.log(PATTERN3.test(value)));

console.log("Caso 2");
plates.forEach(value => {
    var substract2 = value.match(PATTERN3);
    console.log("Matricula:", substract2[0], "Numeros:", substract2[1], "Letras:", substract2[3]);
});

//OPCIONALES
//EXTRAER CONTENIDO SRC

var img = '<img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/>';
const PATTERN4 = /^<img src="(.*)"/;

console.log("\nEXTRAER CONTENIDO SRC");
console.log(PATTERN4.test(img));

var substract3 = img.match(PATTERN4);
console.log("Enlace:", substract3[1]);