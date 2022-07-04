// ============= PROBLEM =============

// GIVEN 
// let d = new Deferred();

// WHEN
// d.then(res => { console.log("1 ", res); return "a"; });
// d.then(res => { console.log("2 ", res); return "b"; });
// d.then(res => { console.log("3 ", res); return "c"; });
// d.resolve("hello"); 

// THEN
// output after d.resolve run
// 1 hello
// 2 a
// 3 b

// ============= SOLUTION =============

class Deferred {
    constructor() {
        this.arrayFn = []
    }
    resolve(msg) {
        let res = msg;
        this.arrayFn.forEach((v, i) => {
            res = v(res)
        })
    }
    then(fn) {
        this.arrayFn.push(fn)
    }
}

// ============= END =============