// Select the Elements
const amountValue = document.getElementById("amount");
const firstCurrency = document.getElementById("firstCurrency");
const secondCurrency = document.getElementById("secondCurrency");
const url = document.getElementById("https://api.exchangeratesapi.io/latest?base=");
const currency = new Currency("USD","TRY");
const ui = new UI(firstCurrency,secondCurrency);
eventListeners();

function eventListeners(){
    firstCurrency.onchange = function(){
        currency.changeFirstCurrency(firstCurrency.options[firstCurrency.selectedIndex].textContent);
        ui.changeFirst();
        currency.exchange()
        .then(res => {
            ui.displayResult(res);
        })
        .catch(err => console.log(err));
    };
    secondCurrency.onchange = function(){
        currency.changeSecondCurrency(secondCurrency.options[secondCurrency.selectedIndex].textContent);
        ui.changeSecond();
        currency.exchange()
        .then(res => {
            ui.displayResult(res);
        })
        .catch(err => console.log(err));
    };
    amountValue.addEventListener("input",function(){
        currency.changeAmount(amountValue.value);
        currency.exchange()
        .then(res => {
            ui.displayResult(res);
        })
        .catch(err => console.log(err));
    });
    // console.log(currency.exchange());
}