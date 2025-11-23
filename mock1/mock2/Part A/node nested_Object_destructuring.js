let user = {
  name: "Alice",
  address: {
    city: "Bengaluru",
    pin: 560001,
    geo: { lat: 11.22, lng: 77.33 }
  }
};
let{
    name,address:{city,pin,geo}
}=user;
console.log(city);
console.log(geo);
