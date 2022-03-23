const pizzaSize = document.getElementById("pizzaSize");
// const medium = document.getElementById("medium");
// const large = document.getElementById("large");
const pepperoni = document.getElementById("pepperoni");
const blackOlives = document.getElementById("blackOlives");
const pizzaCrust = document.getElementById("pizzaCrust");
var grandPizza = document.getElementById("#grandPizza");
// const stuffed = document.getElementById("stuffed");
// const glutenFree = document.getElementById("gluten-free");
var size, crust, sizeTag, crustTag;

var toppingsTag = "";
var toppings = 0;
var total = 0;
var grandTotal = 0;

$(function () {
  $("#addPizza").on("click", function (event) {
    event.preventDefault();
    size = parseInt(pizzaSize.value);
    sizeTag = pizzaSize.options[pizzaSize.selectedIndex].text;
    toppingsTag = document.querySelector("input[name='toppings']:checked").id;
    crustTag = pizzaCrust.options[pizzaCrust.selectedIndex].text;
    console.log(toppingsTag);

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
    function addPizza(size, crust, toppings, total) {
      this.size = size;
      this.crust = crust;
      this.toppings = toppings;
      this.total = total;
    }
    var newPizza = new addPizza(size, crust, toppings, total);
    var toppingsChoice = newPizza.toppings;
    var totalChoice = newPizza.total;

    // var newOrder = `<p>${sizeTag}</p> <p>${crustTag}</p> <p>${toppingsTag}<span> Ksh ${toppingsChoice}</span></p> <p>Total <span> Ksh ${totalChoice}</span></p> `;
    // const pizzaList = document.querySelector("#pizzaList");
    // pizzaList.insertAdjacentHTML("afterbegin", newOrder);

    grandTotal = grandTotal + total;

    document.getElementById("grandPizza").innerHTML =
      "The Grand Total is " + grandTotal;
  });
});
