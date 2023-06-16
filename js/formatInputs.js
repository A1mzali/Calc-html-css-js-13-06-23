import { priceFormatter } from "./formatters.js";

// Inputs
const inputCost = document.querySelector('#input-cost');
const inputDownPayment = document.querySelector('#input-downpayment');

const form = document.querySelector('#form');
const totalCost = document.querySelector('#total-cost');
const totalMonthPayment = document.querySelector('#total-month-payment');
const inputTerm = document.querySelector('#input-term')

// Cleave опции форматирования
const cleavePriceSetting = {
  numeral: true,
  numeralThousandsGroupStyle: 'thousand',
  delimiter: ' ',
}

const cleaveYears = {
  numeral: true,
}

// Запускаем форматирование Cleave
const cleaveCost = new Cleave(inputCost, cleavePriceSetting);
const cleaveDownPayment = new Cleave(inputDownPayment, cleavePriceSetting);


const cleaveTerm = new Cleave(inputTerm, cleaveYears)

// Сумма кредита
calcMortgage();

// Отображение и рассчет суммы кредита

form.addEventListener('input', function () {
  calcMortgage();
})


function calcMortgage() {
  // Общая сумма кредита
  const totalAmout = +cleaveCost.getRawValue() -cleaveDownPayment.getRawValue();
  totalCost.innerText = priceFormatter.format(totalAmout);


  // Ставка кредита

  const creditRate = +document.querySelector('input[name="program"]:checked').value;
  const monthRate =  creditRate /12;


  // Срок ипотеки в годах 
  const years = +cleaveTerm.getRawValue()
  

  // Срок кредита в месяцах

  const months = years * 12;
  console.log(months);

  // расчет ежемесячного платежа
  const monthPayment = (totalAmout * monthRate) / 1 - (1 + monthRate) * (1 - months);
  totalMonthPayment.innerText = monthPayment;

  console.log(monthPayment);
  
}