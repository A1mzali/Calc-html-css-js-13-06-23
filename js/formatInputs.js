import { priceFormatter } from "./formatters.js";

// Inputs
const inputCost = document.querySelector('#input-cost');
const inputDownPayment = document.querySelector('#input-downpayment');
const inputTerm = document.querySelector('#input-term');

const form = document.querySelector('#form');
const totalCost = document.querySelector('#total-cost');

// Cleave опции форматирования
const cleavePriceSetting = {
  numeral: true,
  numeralThousandsGroupStyle: 'thousand',
  delimiter: ' ',
}

// Запускаем форматирование Cleave
const cleaveCost = new Cleave(inputCost, cleavePriceSetting)
const cleaveDownPayment = new Cleave(inputDownPayment, cleavePriceSetting)

// Сумма кредита
calcMortgage();

// Отображение и рассчет суммы кредита

form.addEventListener('input', function () {
  calcMortgage();
})


function calcMortgage() {
  const totalAmout = +cleaveCost.getRawValue() -cleaveDownPayment.getRawValue();
  totalCost.innerText = priceFormatter.format(totalAmout);


  // Ставка кредита


  // Срок ипотеки в годах 
  

  // Срок кредита в месяцах
}