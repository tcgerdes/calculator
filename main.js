// Globale Variablen
var p1 = [];
var p2 = [];
var operator = "";

// Zahlen für jeden einzelnen Button
function calculatorNumbers0() {
  p1.push(0);
  var digit = array2Number(p1)
  display(digit);
}
function calculatorNumbers1() {
  p1.push(1);
  var digit = array2Number(p1)
  display(digit);
}

function calculatorNumbers2() {
  p1.push(2);
  var digit = array2Number(p1)
  display(digit);
}

function calculatorNumbers3() {
  p1.push(3);
  var digit = array2Number(p1)
  display(digit);
}

function calculatorNumbers4() {
  p1.push(4);
  var digit = array2Number(p1)
  display(digit);
}

function calculatorNumbers5() {
  p1.push(5);
  var digit = array2Number(p1)
  display(digit);
}

function calculatorNumbers6() {
  p1.push(6);
  var digit = array2Number(p1)
  display(digit);
}

function calculatorNumbers7() {
  p1.push(7);
  var digit = array2Number(p1)
  display(digit);
}

function calculatorNumbers8() {
  p1.push(8);
  var digit = array2Number(p1)
  display(digit);
}

function calculatorNumbers9() {
  p1.push(9);
  var digit = array2Number(p1)
  display(digit);
}

//Anzeige von meinen Arrays in der Ansicht
function display(number) {
  var display = (document.getElementById("display").value = number);
}

//Mathematische Operatoren
function plus() {
  operator = "+";
  p2 = p1;
  p1 = [];
  var bank = array2Number(p2);
  display(bank);
}

function minus() {
  operator = "-";
  p2 = p1;
  p1 = [];
  var bank = array2Number(p2);
  display(bank);
}

function multiplikator() {
  operator = "*";
  p2 = p1;
  p1 = [];
  var bank = array2Number(p2);
  display(bank);
}

function divide() {
  operator = "/";
  p2 = p1;
  p1 = [];
  var bank = array2Number(p2);
  display(bank);
}

function deleteInput() {
  p1 = [];
  p2 = [];
  operator = "";
  display(0);
}

function equal() {
  var ergebnis1 = array2Number(p2);
  var ergebnis2 = array2Number(p1);
  p1 = [];
  p2 = [];
  //if operator = '+' -> add values;
  if (operator === "+") {
    console.log(ergebnis1 + ergebnis2);
    display(ergebnis1 + ergebnis2);
  } else if (operator === "-") {
    //else operator = '-' -> substract values
    console.log(ergebnis1 - ergebnis2);
    display(ergebnis1 - ergebnis2);
  } else if (operator === "*") {
    //else operator = '*' -> multiply values
    console.log(ergebnis1 * ergebnis2);
    display(ergebnis1 * ergebnis2);
  } else if (operator === "/") {
    //else operator = '/' -> divide values
    console.log(ergebnis1 / ergebnis2);
    display(ergebnis1 / ergebnis2);
  }
  operator = "";
}

//Umwandlung von Speicher in Operative Durchführung
function array2Number(array) {
  var string = ""; //funktionsvariable
  for (i = 0; i < array.length; i++) {
    string = string + array[i];
  }
  return parseInt(string, 10);
}


