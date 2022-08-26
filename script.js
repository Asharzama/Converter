function convert() {
  let input = document.getElementsByClassName("input")[0].value;
  let output = document.getElementsByClassName("output")[0];
  let from = document.getElementById("from").value;
  let to = document.getElementById("to").value;

  // From list
  switch (from) {
    case "decimal":
      input = parseInt(input, 10).toString();
      break;
    case "hexadecimal":
      input = hexaToDec(input).toString();
      break;
    case "octal":
      input = otherToDeci(input, 8).toString();
      break;
    case "binary":
      input = otherToDeci(input, 2).toString();
      break;
  }

  // To list
  switch (to) {
    case "decimal":
      output.value = parseInt(input, 10).toString();
      break;
    case "hexadecimal":
      output.value = decToHexa(input).toUpperCase(); 
      break;
    case "octal":
      output.value = decToOther(input, 8).toString();
      break;
    case "binary":
      output.value = decToOther(input, 2).toString();
      break;
  }
}

// binary and octal to Decimal
function otherToDeci(input, power) {
  let sum = 0;
  for (let index = input.length - 1; index >= 0; index--) {
    sum += input[index] * Math.pow(power, input.length - 1 - index);
  }
  return sum;
}

//Decimal to binary and octal
function decToOther(x, pow) {
  let bin = 0;
  let rem = 0;
  let i = 1;
  while (x != 0) {
    rem = x % pow;
    x = parseInt(x / pow);
    bin += rem * i;
    i = i * 10;
  }
  return bin;
}

//hexadecimal to decimal
function hexaToDec(input) {
  input = input.toLowerCase()
  let sum = 0;
  for (let index = input.length - 1; index >= 0; index--) {
      switch (input[index]) {
        case "a":
          sum += 10 * Math.pow(16, input.length - 1 - index);
          break;
        case "b":
          sum += 11 * Math.pow(16, input.length - 1 - index);
          break;
        case "c":
          sum += 12 * Math.pow(16, input.length - 1 - index);
          break;
        case "d":
          sum += 13 * Math.pow(16, input.length - 1 - index);
          break;
        case "e":
          sum += 14 * Math.pow(16, input.length - 1 - index);
          break;
        case "f":
          sum += 15 * Math.pow(16, input.length - 1 - index);
          break;
        default:
          sum += input[index] * Math.pow(16, input.length - 1 - index);
          break;
    }
  }
  return sum;
}

// decimal to hexadecimal
function decToHexa(x) {
  let hex = "";
  var rem = 0;
  let i = 1;
  while (x != 0) {
    rem = x % 16;
    if(rem > 9){
      switch(rem){
        case 10:
          rem = "a";
          break;
        case 11:
          rem = "b";
          break;
        case 12:
          rem = "c";
          break;
        case 13:
          rem = "d";
          break;
        case 14:
          rem = "e";
          break;
        case 15:
          rem = "f";
          break
      }
    }
    hex += rem;
    x = parseInt(x / 16);
    
  }
  return hex.split("").reverse().join("");
}

//Reset function
function reset() {
  let input = document.getElementsByClassName("input")[0];
  let output = document.getElementsByClassName("output")[0];

  input.value = "";
  output.value = "";

  document.getElementById("from").value = "decimal";
  document.getElementById("to").value = "decimal";
}

// Swap function
function swap() {
  let from = document.getElementById("from").value;
  let to = document.getElementById("to").value;

  document.getElementById("from").value = to;
  document.getElementById("to").value = from;

  let input = document.getElementsByClassName("input")[0].value;
  let output = document.getElementsByClassName("output")[0].value;

  document.getElementsByClassName("output")[0].value = input;
  document.getElementsByClassName("input")[0].value = output;
}
