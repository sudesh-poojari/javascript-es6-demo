"use strict";

console.log('===== ES6 Arrow function declarations =====');

let myFunc = () => {
	console.log('Base arrow function definition');
};

myFunc();

class Car {
	constructor () {
		this.type = "Sports Car";
		this.name = "Lamborgini Aventador";
	}

	getName() {
		//Deliberatly use setTimeout to show power of arrow function
		setTimeout(function () {
			console.log('Normal function inside setTimeout:', this.name);
		}, 10);

		setTimeout(() => {
			console.log('Arrow function inside setTimeout:', this.name);
		}, 10);
	}
}

var car = new Car();
car.getName();