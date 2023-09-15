abstract class VehicleBase {
	constructor(public fuelCapacity: number, public fuelEfficiency: number){}
	abstract getRange(): number;
}
class Vehicle extends VehicleBase {
	getRange(): number {
		return this.fuelCapacity * this.fuelEfficiency;
	}
}
class HybridVehicle extends VehicleBase {
	getRange(): number {
		return this.fuelCapacity * this.fuelEfficiency * 1.5;
	}
}

const gasolineVehicle = new Vehicle(50, 25);
const gasolineVehicleRange = gasolineVehicle.getRange();
console.log(gasolineVehicleRange);

const hybridVehicle = new HybridVehicle(50, 25);
const hybridVehicleRange = hybridVehicle.getRange();
console.log(hybridVehicleRange);

