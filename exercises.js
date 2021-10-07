//GLOBAL variables and closure
var x = 0;

function incrementMe() {
    return x++
}
console.log(incrementMe());
console.log(incrementMe());
console.log(incrementMe());

function incrementMePrivate() {
    var x = 0;
    return ++x
}
console.log(incrementMePrivate());
console.log(incrementMePrivate());
console.log(incrementMePrivate());

function incrementMeClosure() {
    var x = 0;
    var c = function() {
        return x++
    }
    return c
}
var close = incrementMeClosure();
console.log(close());
console.log(close());
console.log(close());


//execution context && hoisting
(function() {

    console.log(fn);

    function fn() {
        return "Hi"
    }
    var fn = "Hello";

})();

//IIFE
(function fn(i) {
    console.log("i = ", i)
    if (i === 10) {
        return;
    } else {
        fn(++i);
    }
})(1);

//What is this? 
//global obj
var x = this;

(function() {
    console.log(this)
})();

//remove default binding
(function() {
    "use strict";
    console.log(this);
})();

//object
var myObj = {
    drink: "juice",
    food: "cookies",
    getFood: function() {
        console.log("Your favorite meal is ", this.food + " and " + this.drink)
    }
}
myObj.getFood();

//call and apply
var myObj2 = {
    drink: "beer",
    food: "pizza"
}
myObj.getFood.call(myObj2);

//bind
var binder = myObj.getFood.bind(myObj2);
console.log(binder());


//Promise
var p = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve('resolved');
    }, 300);
})
console.log(p)


//arrow functions
//filter array
function filter(arr) {
    return arr.filter((el) => el.length > 0)
}
console.log(filter(["", "a", "b"]));

//fn arguments
function sum(a, b) {
    return arguments.length === 1 ? (b) => a + b : a + b;
}
console.log(sum(10)(12), sum(10, 12));


//fibonacci
function fibonacci(max) {
    var a = 1,
        b = 0,
        temp
    while (b < max) {
        temp = a
        a = a + b
        b = temp
        max--
        console.log(b)
    }

    return b
}
fibonacci(44)
    //setTimeout of 0

//CORS

//pure functions

var x = {
    prop1: "a",
    prop2: "b"
}

function impure() {
    x.prop1 = "y";
}
//missing number
console.log(missingNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15])) //12
console.log(missingNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15])) //13

function missingNumber(arr) {
    var n = arr.length + 1;
    var expected = n * (n + 1) / 2;
    var total = arr.reduce((a, b) => a + b, 0);
    return expected - total;
}

// function declaration and function expression 1
var x = 3;

var myObj = {
    x: 2,
    prop1: {
        x: 1,
        prop2: function() {
            return this.x;
        }
    }
}

var go = myObj.prop1.prop2;

console.log(go());
console.log(myObj.prop1.prop2());

// function declaration and function expression 2
console.log(x())

var x = function() {
    return 1
}

function x() {
    return 2
}

console.log(x())

//await
function resolveAfter2Seconds(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x);
        }, 2000);
    });
}

async function f1() {
    var x = await resolveAfter2Seconds("resolved");
    console.log(x); // 10
}

f1();



//context this
let user = {
    firstName: "John",
    sayHello() {
        console.log(this.firstName)
    }
}
sayHelloJohn = user.sayHello
    //let sayJohnsName = user.sayHello
setTimeout(sayHelloJohn(), 1000);


// let vs var 
(function() {
    console.log(i)
        //replace with var
    for (let i = 0; i < 10; i++) {
        console.log(i)
    }
})()

//arrow functions
// replace with function
let obj = {
    prop1: "x",
    props: ["a", "b", "c"],
    showList() {
        this.props.forEach(
            p => console.log(this.prop + ': ' + p)
        );
    }
};
obj.showList();

//fetch async await

//needed in coderpad
//var fetch = require('isomorphic-fetch');


function getData() {
    return fetch('https://api.github.com/orgs/nodejs').then(function(res) {
        return res.json().then(function(data) {
            return data;
        });
    });
}


function logData() {
    const x = getData();
    console.log(x);
}
logData()