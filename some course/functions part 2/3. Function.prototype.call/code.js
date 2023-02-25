var person1 = {
    firstname: 'Steve',
    lastname: 'Jobs',
    speak: function(){
        console.log('Hi! This is ' + this.firstname + ' ' + this.lastname + '.');
    }
};

var person2 = {
    firstname: 'Bill',
    lastname: 'Gates'
};

//person2.speak = person1.speak;
//person2.speak();

//solution
person1.speak.call(person2);

//let's understand how call works
function greet(){
    console.log('Hello ' + this.name);
}
//greet();
var person = {
    name: 'Mark'
};
greet.call(person);


//Challenge
person1.speak();
var func = person1.speak;
console.log(func);
//func();
func.call(person1);

//Constructor Inheritance or Class Inheritance

//superClass
function phone(make, model, warranty, color){
    this.make = make;
    this.model = model;
    this.warranty = warranty ||12;
    this.color = color;
    this.extendWarranty = function (x) {
        this.warranty += x;
    }
}
//subClass
function smartPhone(make, model, operator){
    this.make = make;
    this.model = model;
    this.operator = operator;
}

//subClass instance
var myPhone = new smartPhone('Apple', 'Iphone 6', 'orange');
console.log(myPhone);

phone.call(myPhone, myPhone.make, myPhone.model);
console.log(myPhone);








