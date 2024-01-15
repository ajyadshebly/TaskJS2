function convertCurrency() {
//input from user 
    var amount = parseFloat(document.getElementById("amount").value);
    var currency = document.getElementById("exchange").value;

  
    var usdRate = 3.7534;
    var dinarRate = 5.2896; 
    var nisRate = 1; 
// convert currency
    var convertedAmount;
    if (currency == "usd") {
        convertedAmount = amount * usdRate;
    } else if (currency == "dinar") {
        convertedAmount = amount * dinarRate;
    } else if (currency == "nis") {
        convertedAmount = amount * nisRate;
    } else {
        convertedAmount = "Invalid Currency";
    }
    // display result
    var resultElement = document.querySelector(".result")
 
        resultElement.textContent = "Converted Amount: " + convertedAmount.toFixed(2);
    
}