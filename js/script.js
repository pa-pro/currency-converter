function welcome() {
console.log("Cześć!"); 
}

welcome();


let currencyElement = document.querySelector(".js-currency");
let plnElement = document.querySelector(".js-pln");
let formElement = document.querySelector(".js-form");
let outcomeElement = document.querySelector(".js-outcome");


let rateGBP = 5.25;
let rateEUR = 4.56;


    formElement.addEventListener("submit", (event) => {
        event.preventDefault();

    let pln = +plnElement.value;
    let currency = currencyElement.value;
    let outcome;

    switch (currency) {

        case "EUR":
            outcome = pln / rateEUR;

            break;

        case "GBP":
            outcome = pln / rateGBP;

            break;

    }
    
    outcomeElement.innerHTML = `${pln.toFixed(2)} PLN = ${outcome.toFixed(2)} ${currency}`;

});