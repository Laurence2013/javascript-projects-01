class Animal {
	constructor(name){
		this.name = name;
	}
	eat(){
		console.log(`${this.name} is eating!`);
	}
}
class Dog extends Animal {
	constructor(name){
		super(name);
	}
	bark(){
		console.log(`${this.name} is barking!`);
	}
}
class Cat extends Animal {
	constructor(name){
		super(name);
	}
	meow(){
		console.log(`${this.name} is meowing!`);	
	}
}
const animal = new Animal('Animal');
console.log(animal.eat());

const dog = new Dog('Dog');
console.log(dog.eat());

const cat = new Cat("Cat");
console.log(cat.eat());
