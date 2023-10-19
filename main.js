// Tip calc

// Btn Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // INPUT
  let BA = +document.getElementById("BA-in").value;
  let TP = +document.getElementById("TP-in").value;

  //Process

  let AmountToTip = (TP / 100) * BA;
  let GSTAmount = BA * 0.05;
  let Total = BA + AmountToTip + GSTAmount;

  // Output
  document.getElementById("output-1").innerHTML = AmountToTip.toFixed(2);
  document.getElementById("output-2").innerHTML = GSTAmount.toFixed(2);
  document.getElementById("output-3").innerHTML = Total.toFixed(2);
}
