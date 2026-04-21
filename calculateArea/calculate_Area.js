let length;
let width;

function calculateArea() {
 length = parseFloat(document.getElementById('length').value);
 width = parseFloat(document.getElementById('width').value);

 let area = length * width;
  document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}

function calculateTotalAmount() {
    amount1 = parseFloat(document.getElementById('amount1').value);
    amount2 = parseFloat(document.getElementById('amount2').value);
    amount3 = parseFloat(document.getElementById('amount3').value);

    let totalAmount = amount1 + amount2 + amount3;
    document.getElementById('total_amount').innerText = `Total amount is: ${totalAmount}`;
}