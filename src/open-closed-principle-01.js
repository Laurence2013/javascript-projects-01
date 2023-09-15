var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var VehicleBase = /** @class */ (function () {
    function VehicleBase(fuelCapacity, fuelEfficiency) {
        this.fuelCapacity = fuelCapacity;
        this.fuelEfficiency = fuelEfficiency;
    }
    return VehicleBase;
}());
var Vehicle = /** @class */ (function (_super) {
    __extends(Vehicle, _super);
    function Vehicle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Vehicle.prototype.getRange = function () {
        return this.fuelCapacity * this.fuelEfficiency;
    };
    return Vehicle;
}(VehicleBase));
var HybridVehicle = /** @class */ (function (_super) {
    __extends(HybridVehicle, _super);
    function HybridVehicle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HybridVehicle.prototype.getRange = function () {
        return this.fuelCapacity * this.fuelEfficiency * 1.5;
    };
    return HybridVehicle;
}(VehicleBase));
var gasolineVehicle = new Vehicle(50, 25);
var gasolineVehicleRange = gasolineVehicle.getRange();
console.log(gasolineVehicleRange);
var hybridVehicle = new Vehicle(50, 25);
var hybridVehicleRange = hybridVehicle.getRange();
console.log(hybridVehicleRange);
console.log('Hello');
