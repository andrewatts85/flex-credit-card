var creditCardForm = document.getElementById("creditCardForm");
var cardNumber = document.getElementById("number");
var month = document.getElementById("month");
var year = document.getElementById("year");
var cvc = document.getElementById("cvc");
var customer = document.getElementById("name");

creditCardForm.addEventListener('submit', function (event) {
  
  if (validator.isCreditCard(cardNumber.value)) {
    cardNumber.className = "valid";
  } else {
    cardNumber.className = "invalid";
  }
  
  if (month.value) {
    month.className = "valid";
  } else {
    month.className = "invalid";
  }
  
  if (year.value) {
    year.className = "valid";
  } else {
    year.className = "invalid";
  }
  
  if (cvc.value.length === 3) {
    cvc.className = "valid";
  } else {
    cvc.className = "invalid";
  }
  
  if (customer.value) {
    customer.className = "valid";
  } else {
    customer.className = "invalid";
  }
  
  // stop the event from its default action: submitting the form (for our validation, submission is not desired)
  event.preventDefault();
});
