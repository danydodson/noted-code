function Car(make, model, year) {
  this.make = make
  this.model = model
  this.year = year
}

var car1 = new Car('Eagle', 'Talon TSi', 1993)

console.log(car1.make)
// expected output: "Eagle"