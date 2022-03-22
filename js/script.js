const pizzaSize = document.getElementById("pizzaSize");
// const medium = document.getElementById("medium");
// const large = document.getElementById("large");
const pepperoni = document.getElementById("pepperoni");
const blackOlives = document.getElementById("blackOlives");
const pizzaCrust = document.getElementById("pizzaCrust");
// const stuffed = document.getElementById("stuffed");
// const glutenFree = document.getElementById("gluten-free");
var size, crust;

toppings = 0;
total = 0;

$(function () {
  $("#submit").on("click", function (event) {
    event.preventDefault();
    size = parseInt(pizzaSize.value);

    crust = parseInt(pizzaCrust.value);

    if (pepperoni.checked == true && blackOlives.checked == true) {
      var p1 = document.getElementById("pepperoni").value;
      var bO1 = document.getElementById("blackOlives").value;
      toppings = parseInt(p1) + parseInt(bO1);
    } else if (pepperoni.checked == true) {
      var p2 = document.getElementById("pepperoni").value;
      toppings = parseInt(p2);
    } else if (blackOlives.checked == true) {
      var bO2 = document.getElementById("blackOlives").value;
      toppings = parseInt(bO2);
    } else {
      return alert("please select at least one topping");
    }
    total = size + crust + toppings;
    console.log(total);
    return total;
  });
});
