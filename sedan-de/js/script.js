// Add active class to the current pricing card

var pricesParent = document.getElementById("pricesParent");
var pricingCard = pricesParent.getElementsByClassName("pricingCard");
for (var i = 0; i < pricingCard.length; i++) {
  pricingCard[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// AOS Initialization
AOS.init();
