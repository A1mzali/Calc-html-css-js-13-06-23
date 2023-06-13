import { percentFormatter } from "./formatters";

percentFormatter.format(0.567)

console.log(percentFormatter.format(0.567));
// Ставки по ипотеке
const programBase = 0.12;
const programIt = 0.047;
const programGov = 0.067;
const programZero = 0.108;

// Указываем ставку в радио кропках

document.querySelector('#base-value').value = programBase;
document.querySelector('#it-value').value = programIt;
document.querySelector('#gov-value').value = programGov;
document.querySelector('#zero-value').value = programZero;


// Указываем ставку в label
document.querySelector("#base-text").innerHTML=programBase;
document.querySelector("#it-text").innerHTML=programIt;
document.querySelector("#gov-text").innerHTML=programGov;
document.querySelector("#zero-text").innerHTML=programZero;

