var items = require('./items.json');

//Show me how to calculate the average price of all items. Please console.log the average.
//
// The average price is $23.63
// I'll accept either $23.63 or $23.62

var priceTotal = 0; // total price added up  between all items
var numberOfItems = 0; // total number of items

items.forEach(function(item) {
  priceTotal += item.price;
  numberOfItems += 1;
});

console.log("The average price is $" + (priceTotal/numberOfItems).toFixed(2)); // logs the average of all items

//Show me how to get an array of items that cost between $14.00 and $18.00 USD

/* "Items that cost between $14.00 USD and $18.00 USD:"
[
{
  title: "1970s Coors Banquet Glass Beer Pitcher",
  ...
},
{
  title: "The Three Broomsticks Customizable Beer Stein Mug, Harry Potter Inspired, hogsmeade village, harry potter gift, three broomsticks mug",
  ...
},
{
  title: "Hand Painted Colorful Feather Glass",
  ...
}
] */

//array filter

function eliminate(item) {
  return item.price > 14 && item.price <18;
}

var between14and18 = items.filter(eliminate);
// .map(function(item){
//   return item.title;
// });

console.log("Items that cost between $14.00 USD and $18.00 USD:");
between14and18.forEach(function(item) {
  console.log(item.title);
});

// Show me how find the item with a "GBP" currency code and print its name and price. Please console.log the one you find.
//
// 1970s Schlitz Malt Liquor Glass Beer Pitcher costs £18

//filter items

function currencyGBP(item) {
  return item.currency_code === "GBP";
}

var item = items.filter(currencyGBP);


console.log(item[0].title + " costs £" + item[0].price);
