The regular expressions used in the validateCreditCard function are specific to the format of credit card numbers for each card type.

For Visa cards, the regex pattern is /^4[0-9]{12}(?:[0-9]{3})?$/.

The pattern starts with a "4" to match Visa card prefix.
Then it looks for 12 digits.
An optional group (?:[0-9]{3}) matches the last three digits of Visa cards that have a four digit account number extension.
For Mastercard, the pattern is /^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/

 - The first part of the regex matches a prefix of 51 through 55
 - The second part matches the prefix 2221 through 2229
 - The third part matches the prefix 223 through 229
 - The fourth part matches the prefix 23 through 26
 - The fifth part matches the prefix 270 through 271
 - The sixth part matches the prefix 2720
 - The last part matches the next 12 digits of the card.
 - For American Express, the pattern is /^3[47][0-9]{13}$/

The pattern starts with the digit "3"
Then it checks for either a "4" or "7" which is the next digit that should come after 3
Followed by 13 digits.
For Discover, the pattern is /^6(?:011|5[0-9]{2})[0-9]{12}$/

The pattern starts with the digit "6"
Then it matches the prefix of 6011 or prefix of 65
Then it matches the next 12 digits
It's worth noting that even though the above functions may match the right format of a credit card, it doesn't guarantee that card is valid or not.