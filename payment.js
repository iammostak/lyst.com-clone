var pForm = document.querySelector('#pForm');
var pButton = document.querySelector('#pB');

pButton.addEventListener('click', function() {
   if(pForm.cardNum.value.length != 16) alert('Please enter a valid card number');
   else if(pForm.cvv.value.length != 3) alert('Wrong CVV');
   else alert('Payment Successful, Order Placed');
})