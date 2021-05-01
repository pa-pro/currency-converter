{
    const welcome = () => {
        console.log("Cześć!");
    }

    welcome();

    const calculateOutcome = (currency, pln) => {

    const rateGBP = 5.25;
    const rateEUR = 4.56;

    switch (currency) {
        case "EUR":
            return pln / rateEUR;

        case "GBP":
            return pln / rateGBP;

    }

};

const formElement = document.querySelector(".js-form");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    const currencyElement = document.querySelector(".js-currency");
    const plnElement = document.querySelector(".js-pln");
    const outcomeElement = document.querySelector(".js-outcome");

        const pln = +plnElement.value;
        const currency = currencyElement.value;

        const outcome = calculateOutcome(currency, pln);

        outcomeElement.innerHTML = `${pln.toFixed(2)} PLN = ${outcome.toFixed(2)} ${currency}`;
    });

}