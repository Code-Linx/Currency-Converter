const fromCurrencySelect = document.getElementById("fromCurrency");
const toCurrencySelect = document.getElementById("toCurrency");
const amountInput = document.getElementById("amount");
const resultDiv = document.getElementById("result");
const convertButton = document.querySelector("button");

// Example currency rates (replace with real-time data or API)
const currencyRates = {
  USD: 1,
  EUR: 0.85,
  GBP: 0.73,
  JPY: 109.31,
};

// Populate currency dropdowns
for (const currency in currencyRates) {
  const option1 = document.createElement("option");
  const option2 = document.createElement("option");
  option1.value = currency;
  option2.value = currency;
  option1.textContent = currency;
  option2.textContent = currency;
  fromCurrencySelect.appendChild(option1);
  toCurrencySelect.appendChild(option2);
}

function convertCurrency() {
  const fromCurrency = fromCurrencySelect.value;
  const toCurrency = toCurrencySelect.value;
  const amount = parseFloat(amountInput.value);

  if (isNaN(amount)) {
    alert("Please enter a valid amount.");
    return;
  }

  if (!currencyRates[fromCurrency] || !currencyRates[toCurrency]) {
    alert("Invalid currency selection.");
    return;
  }

  const convertedAmount =
    (amount / currencyRates[fromCurrency]) * currencyRates[toCurrency];
  resultDiv.textContent = `${amount} ${fromCurrency} is equal to ${convertedAmount.toFixed(
    2
  )} ${toCurrency}`;
}

convertButton.addEventListener("click", convertCurrency);
