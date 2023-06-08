var netPrice = 1000
var x = number(prompt("enter x value percentage"));
var y = number(prompt("enter y value percentage"));
var z = number(prompt("enter z value percentage"));

var totalprice = (netPrice * (1 + x + y + z));
alert(totalprice);
console.log(totalprice)