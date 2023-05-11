var a = [1,2,3];
a.push(1);

// double method
// console.log(a.double());
// [2,4,6]

Array.prototype.double = function() {
    console.log(this);
    return this.map((x) => x * 2);
}

console.log(a.double());

// Arrow Functions

var d = (x) => x * 2;

(function(x){
    return x * 2;
})();

var a = function (x, y) {
    return x + y;
}

var a = (x, y) => {
    return x + y;
}

// ===========================

var variable = "Global level variable"
let myObject = {
    variable: 'Object level variable',
    arrowFunction: () => {
        console.log(this.variable);
    },
    regularFunction () {
        console.log(this.variable);
    }
};

myObject.arrowFunction();
myObject.regularFunction();

const a = [1,2,3];
const b = [...a];
console.log(b);
