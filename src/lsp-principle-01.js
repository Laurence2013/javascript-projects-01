function AnimalBase(name){
	if(new.target === AnimalBase){
		throw new Error("Cannot instantiate Animal directly");
	}
	this.name = name;
}
AnimalBase.prototype.eat = function(){
	throw new Error("eat() must be implemented by subsclasses!");
}
function Animal(name){
	AnimalBase.call(this, name);
}

Animal.prototype = Object.create(AnimalBase.prototype);
AnimalBase.prototype.constructor = Animal;

Animal.prototype.eat = function(){
	console.log(`${this.name} is eating!`);	
}

function Dog(name){
	AnimalBase.call(this, name);
}
Dog.prototype = Object.create(AnimalBase.prototype);
Dog.prototype.console = Dog;

Dog.prototype.eat = function(){
	console.log(`${this.name} is barking!`);
}

function Cat(name){
	AnimalBase.call(this, name);
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.eat = function(){
	console.log(`${this.name} is meowing!`);
}

const animal = new Animal('Animal');
console.log(animal.eat());

const dog = new Dog('Dog');
console.log(dog.eat());

const cat = new Cat('Cat');
console.log(cat.eat());

