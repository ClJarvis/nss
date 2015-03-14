/*
  .....  YOUR MISSION  .....

  1. Make a JavaScript module that has properties
      that describe your favorite food. One
      property must be an array that will hold
      incredients.

  2. Create a method that allows you to add
      ingredients for your favorite food.

  3. Use the method you built above to add all of
      the ingredients you can think of for your food.

*/

var favoriteFood = {
	name: "burger",
	patty: 2,
	done: "med_rare",
	size: "quarter_pound",

	ingredients: ["paprika", "garlic_powder", "angus"],

	// addIngredient: function (ingredient) {
	// 	this.ingredients
	// },

addIngredients: function (ingredients) {
		// this.ingredients
		this.ingredients.push (ingredients);
	},


}

var myIngredients = ["paprika", "garlic_powder", "angus"]

myIngredients.map(function (ingredient) {
	favoriteFood.addIngredient(ingredient);
});


console.log(favoriteFood, favoriteFood.ingredients);
console.log(favoriteFood.ingredients);
