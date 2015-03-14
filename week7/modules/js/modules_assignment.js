/*
  .....  YOUR MISSION  .....

  1. Make a JavaScript module that has properties
      that describe your favorite food. One
      property must be an array that will hold
      ingredients.

  2. Create a method that allows you to add
      ingredients for your favorite food.

  3. Use the method you built above to add all of
      the ingredients you can think of for your food.

*/

var favoriteFood = {
<<<<<<< HEAD
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

=======
  name: "lasagna",
  layers: 5,
  spicy: true,
  size: "xxx-large",
  temperature: "hot",
>>>>>>> a1819c2e680fbf4f29f9160a16439de137c8af49

  ingredients: [],

  addIngredient: function (ingredient) {
    this.ingredients.push(ingredient);
  }
}

<<<<<<< HEAD
var myIngredients = ["paprika", "garlic_powder", "angus"]

myIngredients.map(function (ingredient) {
	favoriteFood.addIngredient(ingredient);
});


console.log(favoriteFood, favoriteFood.ingredients);
console.log(favoriteFood.ingredients);
=======
var myIngredients = ["pasta", "tomatoes", "ricotta", "parmesan"]

myIngredients.map(function (ingredient) {
  favoriteFood.addIngredient(ingredient);
});

console.log(favoriteFood);
>>>>>>> a1819c2e680fbf4f29f9160a16439de137c8af49
