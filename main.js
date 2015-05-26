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

// Show me how find the item with a "GBP" currency code and print its name and price. Please console.log the one you find.
//
// 1970s Schlitz Malt Liquor Glass Beer Pitcher costs £18

//filter items

function getCurrencyGBP(item) {
  return item.currency_code === "GBP";
}

var itemGBP = items.filter(getCurrencyGBP);


console.log(itemGBP[0].title + " costs £" + itemGBP[0].price);

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
