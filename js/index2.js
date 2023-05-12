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

const arr = [1,2,3,4];
const brr = [...arr];
console.log(brr);

let arr1 = [0,1,2];
const arr2 = [3,4,5];

arr1 = [...arr1, ...arr2];
console.log(arr1);

let ab = [1,2,3];
console.log(Math.max(...ab));


// Events 

console.log(document.getElementById("b"));

document.getElementById("b").addEventListener("click", function(e){
    console.log("clicked");
    console.log(e.target);
});

document.getElementById("f").addEventListener("click", function(e){
    console.log(e.target.getAttribute("data-elm"));
    if (e.target.getAttribute("data-elm") === 'p'){
        console.log('p clicked');
    }
});

// click
// change
// mouseove
// keydown
// keyup


// Event Loop

console.log(1);

// setTimeout(function () {
//     console.log(2);
// }, 1000);

// setTimeout(function () {
//     console.log(3);
// }, 0);

console.log(4);

// doubleHolder

document.getElementById("doubleHolder").addEventListener("click", function(e) {
    if (e.target.classList.contains("double")){
        var btn = document.createElement("button");
        btn.setAttribute("class", "double");
        btn.innerHTML = "double";

        var btn2 = document.createElement("button");
        btn2.setAttribute("class", "double");
        btn2.innerHTML = "double";

        this.appendChild(btn);
        this.appendChild(btn2);
        this.removeChild(e.target);
    }
});

var num = 10,
    name = "Adarsh Kumar",
    obj1 = {
        value: 'first value'
    },
    obj2 = {
        value: 'second value'
    },
    obj3 = obj2;

function change (num, name, obj1, obj2) {
    num = num * 10;
    name = 'kohli';
    obj1 = obj2;
    obj2.value = 'new value';
}

change(num, name, obj1, obj2);

console.log(num);
console.log(name);
console.log(obj1.value);
console.log(obj2.value);
console.log(obj3.value);