let Colour = Object.freeze({
	red: 'red',
	green: 'green',
	blue: 'blue'
});
let Size = Object.freeze({
	small: 'small',
	medium: 'medium',
	large: 'large'
});

class Product {
	constructor(name, colour, size){
		this.name = name;
		this.colour = colour;
		this.size = size;
	}
}
class ProductFilter {
	filterByColour(products, colour){
		return products.filter(p => p.colour === colour);
	}
}

let apple	= new Product('Apple', Colour.green, Size.small);
let tree	= new Product('Tree', Colour.green, Size.large);
let house = new Product('House', Colour.blue, Size.large);

let products = [apple, tree, house];

let pFilter = new ProductFilter();
console.log(`Green products (old):`);

for(let p of pFilter.filterByColour(products, Colour.green)){
	console.log(` * ${p.name} is green`);
}
