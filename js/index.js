var a = 'string';
var b = 2;
var c = true;


console.log(a,b,c);
console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));

var d = null;

// Dynamically typed language

console.log(typeof(d));

var e;
console.log(e);
console.log(typeof(e));

console.log(typeof e);

// JS is loosely typed language

console.log(1=='1'); // 1 == +'1'(1)
console.log(1==='1');

console.log(+'1');


function Dog (name, breed) {
    this.name = name;
    this.breed = breed;
    this.barks = function(){
        console.log('woof woof');
    }
}

function Cat (name, breed) {
    this.name = name;
    this.breed = breed;
    this.barks = function (){
        console.log('meow meow');
    }
}

Dog.prototype.a = 1;

Dog.prototype.barks1 = function(){
    console.log('woof woof changed');
}

Cat.prototype.talks = function(){
    console.log('meow1 meow1');
}

var d1 = new Dog('cat', 'mixed');
var d2 = new Dog('cat1', 'mixed1');

console.log(d1);
console.log(d2);
console.log(d1.barks());

//Prototype is an object which is 
// available in the constructor dunctions
// uisng which inheritance in JS can happen
// called as prototypical inheritance

var a = {
    x: 10,
    calculate: function (z) {
        return this.x + this.y + z;
    }
}

var b = {
    y: 20,
    __proto__: a
}

var c = {
    y: 30,
    __proto__: a
}

console.log(b.calculate(1))

// =============================

function Foo(y) {
    this.y = y;
}

Foo.prototype.x = 10;

Foo.prototype.calculate = function (z) {
    return this.x + this.y + z;
}

var b = new Foo(20);
var c = new Foo(30);

b.calculate(30); // 60
c.calculate(40); // 80

// ===============================
// Hoisting

var a = 20;
function abc () {
    // var a = 10;
    // hois var a;
    console.log(a);
    var a = 10;
    // hois a = 10;
}

abc();

var x = 21;

var girl = function(){
    console.log(x);
    var x = 20;
}

girl();

// function declarations are hoisted but expressions are not

var pokemon = {
    firstName: 'Pika',
    lastName: 'chu',
    getPokeName: function(){
        var fullName = this.firstName + ' ' + this.lastName;
        return fullName;
    }
};

var pokemonName = function(snack, hobby){
    console.log(this.getPokeName() + ' loves ' + snack
     + ' and ' + hobby);
};

pokemonName.call(pokemon, 'sushi', 'algos');
pokemonName.apply(pokemon, ['sushi', 'algos']);

// call (newReference, params)
// apply(newReference, [params])

console.log(Math.max(1,2));

var a = [1,2,3,4,5,6,7];
console.log(Math.max.apply(this, a));
console.log(Math.max.apply(null, a));

var logPokemon = pokemonName.bind(pokemon);

logPokemon('sushi', 'algos');

// =================================

var monica = {
    name: 'Monica Geller',
    total: 400,
    deductMonthlyFee: function (fee) {
        this.total = this.total - fee;
        return this.name + ' remaining balance is ' + this.total;
    }
}

var rachel = {name: 'Rachel Green', total: 1500};
console.log(monica.deductMonthlyFee.call(rachel, 100));
var rachelFeeDeduct = monica.deductMonthlyFee.bind(rachel, 199);

console.log(rachelFeeDeduct());


var b = 1;
function outer(){
    var b = 2;
    function inner (){
        b++;
        var b = 3;
        console.log(b);
    }
    inner();
}
outer();

a = 25;
var a;
console.log(a);

function log () {
    // console.log(arguments);
    // Method - 1
    var ans = 'Adarsh ';
    for (var i = 0; i < arguments.length; i++){
        ans += (arguments[i] + ' ');
    }
    console.log(ans);
   
    // Method - 2
    args = Array.prototype.slice.call(arguments);
    // console.log(args);
    args.unshift("Adarsh");
    args2 = args.join()
    console.log.apply(console, args);
    // console.log(args2);
}

log('hello');
log('hi how are you');
log ('hello', 'hi');

// ========================

// Closure: retaining the scope of a variable even after a function has returned.

function makeWorker(){
    var name = 'Pete';

    return function() {
        console.log(name); // Pete
    };
}

var name = 'John';
var work = makeWorker();
work(); // Why Pete not John?

// To understand this we have to read closure.

function makeCount() {
    var count = 0;
    return function(){
        return count++;
    };
};

var counter = makeCount();
var counter2 = makeCount();

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

console.log(counter2());
console.log(counter2());
console.log(counter2());
console.log(counter2());
console.log(counter2());

// IIFE

var a = function () {
    console.log("hi");
};

a();

(function () {
    console.log("hi");
})();

function foo1 () {
    return {
        bar: 'hello'
    };
}

function foo2 () {
    return { // If it goes to next line it gives error
        bar: "hello"
    };
}

console.log(foo1());
console.log(foo2());


// Inheritance (Prototypical Inheritance)

function Mammal (name) {
    this.name = name;
    this.offSpring = [];
}

Mammal.prototype.haveABaby = function(){
    var newBaby = new Mammal("Baby " + this.name);
    this.offSpring.push(newBaby);
    return newBaby;
}

function Cat(name){
    this.name = name;
}

Cat.prototype = new Mammal();
Cat.prototype.constructor = Cat;

var myPet = new Cat('Felix');
console.log('some animal is ' + myPet.name);
myPet.haveABaby();
console.log(myPet.offSpring.length);
console.log(myPet.offSpring[0].name);

// let const and var

var a = 10;
var a = 20;

// let b = 10;
// let b = 30; Not allowed

function abc (){
    var a = 10;
    if (a){
        let b = 10;
    }
    let b = 20;
    console.log(b);
    // let b = 10; // Not allowed in let but allowed in var
}

// value will not changed in const
const constant = 10;
// constant = 20; // Not allowed

