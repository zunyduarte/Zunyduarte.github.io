document.getElementById("calculateButton").addEventListener("click", function() {
    const totalAmount = parseFloat(document.getElementById("totalAmount").value);
    const tipPercentage = parseFloat(document.getElementById("tipPercentage").value);
    
    const tipAmount = (totalAmount * tipPercentage) / 100;
    
    const tipResultElement = document.getElementById("tipResult");
    tipResultElement.innerHTML = `Propina: $${tipAmount.toFixed(2)}`;
  });