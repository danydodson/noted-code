var myNamespace = window.myNamespace || {};

//module
myNamespace.module = (function() {
  //private members
  var privateProperty1 = false;
  var privateProperty2 = [1, 2, 3];
  function privateMethod1() {
    console.log("Hi");
  }
  function privateMethod2() {
    console.log("Hello");
  }

  //return object
  return {
    //public members
    publicProperty1: true,
    publicProperty2: 10,
    publicMethod1: function() {
      console.log(privateProperty1);
      privateMethod1();
    },
    publicMethod2: function() {
      console.log(privateProperty2);
    }
  };
})();

myNamespace.module.publicMethod1();
myNamespace.module.publicMethod2();
