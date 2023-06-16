import { percentFormatter } from "./formatters.js";


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
document.querySelector("#base-text").innerHTML= percentFormatter.format(programBase);
document.querySelector("#it-text").innerHTML=percentFormatter.format(programIt);
document.querySelector("#gov-text").innerHTML=percentFormatter.format(programGov);
document.querySelector("#zero-text").innerHTML=percentFormatter.format(programZero);



// Отображение выбранной % ставки
const programInputs = document.querySelectorAll('input[name="program"]');
const totalPerson = document.querySelector('#total-percent');


// Клик
programInputs.forEach((input) => {
  // Отображение % ставки при старте
   if(input.checked) {
    totalPerson.innerText = percentFormatter.format(input.value);
   }


  // Отображение % ставки при переключении
  input.addEventListener('click', function() {
    totalPerson.innerText = percentFormatter.format(this.value);
  })
})
