function speak(animal){
	console.log(animal.speak());
}
function walk(animal){
	console.log(animal.walk());
}
function swim(animal){
	console.log(animal.swim());
}

class Dog {
	speak() {
		return 'Woof...';
	}
	walk(){
		return 'Walking...';
	}
}
class Fish {
	swim(){
		return 'Swimming...';
	}
}

const dog = new Dog();
const fish = new Fish();

speak(dog);
walk(dog);
swim(fish);
