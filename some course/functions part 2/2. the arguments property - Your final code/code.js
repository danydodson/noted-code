var add = function(x, y, z){
    console.log(arguments);
    console.log(arguments.length);
    console.log(arguments[1]);
    if(arguments.length == 0){
        console.log('Please input arguments in the add function!');
    }
    
    //let's say if a parameter is missing replace it by zero
    x = x || 0;
    y = y || 0;
    z = z || 0;
    return x + y + z;
};
var sum = add(4, 5, 6, 6);
console.log(sum);