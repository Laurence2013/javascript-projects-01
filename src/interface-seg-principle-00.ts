interface Animal {
	speak(): any;
	walk(): any;
	swim(): any;
}
interface LandAnimal {
	speak(): any;
	walk(): any;
}
interface WaterAnimal {
	swim(): any;
}

class Dog implements LandAnimal {
	public speak(){
		console.log('Woof!');
	}
	public walk(){
		console.log('Walking...');
	}
}
class Fish implements WaterAnimal {
	public swim(){
		console.log('Swimming...');
	}
}
const dog = new Dog();
console.log(dog.speak());
console.log(dog.walk());

const fish = new Fish();
console.log(fish.swim());
