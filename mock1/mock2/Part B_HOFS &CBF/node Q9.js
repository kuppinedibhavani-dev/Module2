function VehicleInfo(callback){
    callback();
}
function CarInfo(){
    console.log("This is a car.Category: 4-wheeler");
}
function TruckInfo(){
    console.log("This is a Truck.Category: Heavy Vehicle");
}
function BikeInfo(){
    console.log("This is a Bike.Category: 2-wheeler");
}
function VehicleInfoCar(){
  VehicleInfo(CarInfo);
}
function VehicleInfoTruck(){
  VehicleInfo(TruckInfo);
}
function VehicleInfoBike(){
  VehicleInfo(BikeInfo);
}
VehicleInfoCar();
VehicleInfoTruck();
VehicleInfoBike();