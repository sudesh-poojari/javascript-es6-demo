"use strict";

console.log('===== ES6 Variable definition using let =====');

//Declare variable "a"
let a = "dog";

if (true) {
	//Declare variable "a" inside scope using let won't mute "a" outside of scope
	let a = "cat";
	console.log("Inside if scope a =", a);
}

console.log('Outside if scope a =', a);

console.log('==== Using Const ====');

//Declare constant PI
const PI = 3.14;

console.log('Constant PI =', PI);

//Try to modify constant PI
try {
	PI = 3.146;
} catch (e) {
	console.log('PI error:', e.message);
}