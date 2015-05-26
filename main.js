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

//array filter

function eliminateHiLow(item) {
  return item.price > 14 && item.price <18;
}

var between14and18 = items.filter(eliminateHiLow);
// .map(function(item){
//   return item.title;
// });

console.log("Items that cost between $14.00 USD and $18.00 USD:");
between14and18.forEach(function(item) {
  console.log(item.title);
});
console.log("\n");


// Show me how find the item with a "GBP" currency code and print its name and price. Please console.log the one you find.
//
// 1970s Schlitz Malt Liquor Glass Beer Pitcher costs £18

//filter items

function getCurrencyGBP(item) {
  return item.currency_code === "GBP";
}

var itemGBP = items.filter(getCurrencyGBP);


console.log(itemGBP[0].title + " costs £" + itemGBP[0].price);
console.log("\n");


//Show me how to find which items are made of wood. Please console.log the ones you find.

//SALE Mid Century Siesta Ware White Mug with Anchor - Set of 3 is made of wood.
// Bottle cap catcher personalized. Man cave gift for him- Wooden Beer pub sign - Groomsmen wedding Gift is made of wood.
// Medium Size, Welcome To Our Firepit-Where Friends And Marshmallows Get Toasted At The Same Time-Painted Wood Sign-Custom Colors is made of wood.
// Magnetic Wall Mount Bottle Opener Barware Set - Stainless Steel or Black - Personalized if you like! is made of wood.
// Engraved Pocket Knife, Personalized Groomsmen Gift, Ring Bearer Gift, Graduation Gift, 4 Knives is made of wood.

//filter items

function getWoodItems(item) {
  var isWood = false;

  item.materials.forEach(function(material) {
    if (material === "wood") {
      isWood = true;
    }
  });

  return isWood;
}

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

//map to create new array materialCount w/ only three properties: title, materials, and new property materialCount;
//filter to keep items w/ item.materialCount > 7

var newArray = items.filter(function(item, index, array) {
  return item.materials.length > 7;
});


newArray.forEach(function(item) {

  console.log(item.title + " has " + item.materials.length + " materials: \n");
  item.materials.forEach(function(material) {
    console.log(material);
  });
  console.log("\n");
});
