var bigInt = require('big-integer');

var maxInt = Math.pow(2,53);
console.log("Max Safe Integer: \n", maxInt);

console.log("------------------");
console.log(maxInt, ' + ', 1);
console.log("Guestimate      : ", maxInt+1);
console.log("actual          : ", bigInt(maxInt).add(1).toString());

console.log("------------------");
console.log(maxInt, ' * ', 700);
console.log("Guestimate      : ", maxInt*700);
console.log("actual          : ", bigInt(maxInt).times(700).toString());

console.log("------------------");
console.log("(",maxInt, " * ", maxInt, ") / (",maxInt," * 4 ) ");
console.log("Guestimate      : ", (maxInt*maxInt) / maxInt*4);
console.log("actual          : ", bigInt(maxInt).times(bigInt(maxInt)).divide(bigInt(maxInt).times(4 )).toString());