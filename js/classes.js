"use strict";

console.log('===== ES6 Object oriented programming =====');

class Human {
	constructor () {
		this.name = 'Mahatma Gandhi';
	}

	greet() {
		console.log(this.name + ' says hello');
	}
}

let human = new Human();
console.log('Human greetings');
human.greet();

class Programmer extends Human {
	constructor () {
		super();
		this.name = "John Nash";
	}
}

let programmer = new Programmer();
console.log('Programmer greetings extended from Human');
programmer.greet();