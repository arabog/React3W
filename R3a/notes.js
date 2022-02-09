/* 
https://www.w3schools.com/react/react_intro.asp


How does React Work?
React creates a VIRTUAL DOM in memory.

Instead of manipulating the browser's DOM directly, 
React creates a virtual DOM in memory, where it does 
all the necessary manipulating, before making the 
changes in the browser DOM.

React only changes what needs to be changed!

React finds out what changes have been made, and 
changes only what needs to be changed.

You will learn the various aspects of how React 
does this in the rest of this tutorial.


Classes:
A class is a type of function, but instead of using the 
keyword function to initiate it, we use the keyword 
class, and the properties are assigned inside a 
constructor() method.


class Car {
	constructor(name) {
		this.brand = name;
	}
}


const mycar = new Car("Ford");



Method in Classes:
You can add your own methods in a class:

Create a method named "present": 

class Car {
	constructor(name) {
		this.brand = name;
	}
	
	present() {
		return 'I have a ' + this.brand;
	}
}

const mycar = new Car("Ford");
mycar.present(); // I have a Ford



Class Inheritance:
To create a class inheritance, use the extends keyword.

A class created with a class inheritance inherits all 
the methods from another class:

Create a class named "Model" which will inherit the 
methods from the "Car" class: 
*/

class Car {
	constructor(name) {
		this.brand = name;
	}

	present() {
		return 'I have a ' + this.brand;
	}
}

class Model extends Car {
	constructor(name, mod) {
		super(name);

		this.model = mod;
	}  

	show() {
		return this.present() + ', it is a ' + this.model
	}
}

const mycar = new Model("Ford", "Mustang");
mycar.show(); // I have a Ford, it is a Mustang

/*
The super() method refers to the parent class.
By calling the super() method in the constructor method, 
we call the parent's constructor method and gets access 
to the parent's properties and methods.

https://www.w3schools.com/react/react_es6_arrow.asp

Arrow Functions
Arrow functions allow us to write shorter function syntax:

B4:
hello = function() {
	return "Hello World!";
}

With Arrow Fxn:
hello = () => {
	return "Hello World!";
}





*/