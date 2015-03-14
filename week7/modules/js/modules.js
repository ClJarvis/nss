// var basicCarModule = {

//   color: "blue",
//   size: "sedan",

//   options: {
//     sunroof: true,
//     racingStripes: false,
//     spoiler: false,
//     leatherSeats: true,
//     heatedSeats: true,
//     underLighting: false,
//     },

// setColor: function (color){
//   this.color = color;
// }
//   }

//   console.log('basicCarModule', basicCarModule);
//   basicCarModule.setColor("green");


//   console.log('basicCarModule', basicCarModule);

var module = (function () {
  var color = "blue";

  return  {
    a: 1,
    getColor: function () {
      return color;
      }

  };

}) ();


console.log(module.getColor());




