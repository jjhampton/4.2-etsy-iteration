var items = require('./items.json');

//Show me how to calculate the average price of all items. Please console.log the average.
//
// The average price is $23.63
// I'll accept either $23.63 or $23.62

var priceTotal = 0; // total price added up  between all items

// Add each item's price to the running total.
items.forEach(function(item) {
  priceTotal += item.price;
});

// logs the average of all items
console.log("The average price is $" + (priceTotal/items.length).toFixed(2));
console.log("\n");


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

//Callback function for Array.prototype.filter, only returns items who have a price in target range

function eliminateHiLow(item) {
  return item.price > 14 && item.price <18;
}

//Create new array filtering out those items who do not pass the test
var between14and18 = items.filter(eliminateHiLow);

//Log each item's title to the console
console.log("Items that cost between $14.00 USD and $18.00 USD:");
between14and18.forEach(function(item) {
  console.log(item.title);
});
console.log("\n");


// Show me how find the item with a "GBP" currency code and print its name and price. Please console.log the one you find.
//
// 1970s Schlitz Malt Liquor Glass Beer Pitcher costs £18


//Callback function to pass to Array.prototype.filter, only returns items w/ matching currency code property
function getCurrencyGBP(item) {
  return item.currency_code === "GBP";
}

//Create new array filtering out those items who do not pass the test
var itemGBP = items.filter(getCurrencyGBP);

//Log item's title and price to console
console.log(itemGBP[0].title + " costs £" + itemGBP[0].price);
console.log("\n");


//Show me how to find which items are made of wood. Please console.log the ones you find.

//SALE Mid Century Siesta Ware White Mug with Anchor - Set of 3 is made of wood.
// Bottle cap catcher personalized. Man cave gift for him- Wooden Beer pub sign - Groomsmen wedding Gift is made of wood.
// Medium Size, Welcome To Our Firepit-Where Friends And Marshmallows Get Toasted At The Same Time-Painted Wood Sign-Custom Colors is made of wood.
// Magnetic Wall Mount Bottle Opener Barware Set - Stainless Steel or Black - Personalized if you like! is made of wood.
// Engraved Pocket Knife, Personalized Groomsmen Gift, Ring Bearer Gift, Graduation Gift, 4 Knives is made of wood.

//Callback function
function getWoodItems(item) {
  var isWood = false;

  item.materials.forEach(function(material) {
    if (material === "wood") {
      isWood = true;
    }
  });

  return isWood;
}

//Create new array filtering out those items who do not pass the test
var woodArray = items.filter(getWoodItems);

woodArray.forEach(function(item) {
  console.log(item.title + " is made of wood.");
});

// Show me how to find which items are made of eight or more materials. Please console.log the ones you find.
//
// Qty of 2 Groomsmen Gift - Stainless Steel Personalized Bottle Opener - NO Capcatcher has 9 materials:
// wall mount bottle opener
// wedding
// man cave
// christmas gift
// guy gift
// fathers day
// home bar
// beer
// bar
//
// The Three Broomsticks Customizable Beer Stein Mug, Harry Potter  Inspired, hogsmeade village, harry potter gift, three broomsticks mug  has 13 materials:
//
// glass
// sandblast cabinet
// vinyl
// beer glass
// pint glass
// etched pint glass
// etched glass
// etched beer glass
// 16 oz pint
// beer gift
// etched harry potter glass
// the three broomsticks glass
// personalized harry potter glass

//filter to keep items w/ item.materialCount > 7

var arrayOver7Materials = items.filter(function(item) {
  return item.materials.length > 7;
});

//Log to console
arrayOver7Materials.forEach(function(item) {

  console.log(item.title + " has " + item.materials.length + " materials: \n");
  item.materials.forEach(function(material) {
    console.log(material);
  });
  console.log("\n");
});

// Show me how to calculate how many items were made by their sellers
//
// 18 were made by their sellers

//filter if item.who_made === "i_did"
//calculate length of new filtered array

var arrayMadeBySellers = items.filter(function(item) {
  return item.who_made === "i_did";
});

console.log(arrayMadeBySellers.length + " items were made by their sellers");
