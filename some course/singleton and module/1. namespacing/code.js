//bad JS
//developer 1
function greet(name) {
  console.log("Hello " + name + ".");
}
//developer 2
var greet = "hello"; //function greet overwritten

//good JS
var namespace1 = {
  greet: function(name) {
    console.log("Hello " + name + ".");
  }
};

var namespace2 = {
  greet: "hello"
};

namespace1.greet("Mark");
