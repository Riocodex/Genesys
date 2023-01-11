function validateCreditCard(cardNumber, cardType) {
    var regex;
    switch (cardType) {
        case "Visa":
            regex = /^4[0-9]{12}(?:[0-9]{3})?$/;
            break;
        case "Mastercard":
            regex = /^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/;
            break;
        case "American Express":
            regex = /^3[47][0-9]{13}$/;
            break;
        case "Discover":
            regex = /^6(?:011|5[0-9]{2})[0-9]{12}$/;
            break;
        default:
            console.log("Invalid card type");
            return false;
    }
    return regex.test(cardNumber);
}
