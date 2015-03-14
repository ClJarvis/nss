/*
  .....  YOUR MISSION  .....

  Using your knowledge of closures, create a function named secretKey()
  that accept any integer as an argument. That function should return
  another function that, when called, should output any random number
  between 1 and the number passed into secretKey().
*/


function secretKey (randNum) {
	// return math.random();
	return function () {
		return Math.random() * randNum;

		// return random;
	}
}

var createKey = secretKey(341);

console.log('createKey()', createKey());
