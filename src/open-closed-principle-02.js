function VehicleBase(fuelCapacity, fuelEfficiency){
	if(new.target === VehicleBase){
		throw new Error('Cannot instantiate VehicleBase directly');
	}
	this.fuelCapacity = fuelCapacity;
	this.fuelEfficiency = fuelEfficiency;
}
VehicleBase.prototype.getRange = function(){
	throw new Error('getRange() must be implemented by subsclasses!');
}

function Vehicle(fuelCapacity, fuelEfficiency){
	VehicleBase.call(this, fuelCapacity, fuelEfficiency);
}
Vehicle.prototype = Object.create(VehicleBase.prototype);
Vehicle.prototype.constructor = Vehicle;

Vehicle.prototype.getRange = function(){
	return this.fuelCapacity * this.fuelEfficiency;
}

function HybridVehicle(fuelCapacity, fuelEfficiency){
	VehicleBase.call(this, fuelCapacity, fuelEfficiency);
}
HybridVehicle.prototype = Object.create(VehicleBase.prototype);
HybridVehicle.prototype.constructor = HybridVehicle;

HybridVehicle.prototype.getRange = function(){
	return this.fuelCapacity * this.fuelEfficiency * 1.5;
}

const gasolineVehicle = new Vehicle(50, 25);
const gasolineVehicleRange = gasolineVehicle.getRange();
console.log(gasolineVehicleRange);

const hybridVehicle = new HybridVehicle(50, 25);
const hybridVehicleRange = hybridVehicle.getRange();
console.log(hybridVehicleRange);
