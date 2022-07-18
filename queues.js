const fs = require('fs')

setImmediate(()=> console.log('setImmediate')); // 8

fs.readFile('/etc/passwd',(err, data)=>{
  console.log('reading file'); // 10
}); 

console.log('start'); // 1

process.nextTick(()=> console.log('nextTick')); // 4

setTimeout(()=>console.log('setTimeout 1'), 0); // 6

setTimeout(()=>console.log('setTimeout 2'), 3);  // 11

let counter = 0;
const timeout = setInterval(() => {
    console.log('setInterval'); // 7 // 9 // 12 // 13
    if (counter >= 3) {
        console.log('exiting setInterval'); // 14
        clearInterval(timeout);
    }
    counter++;
}, 0);

new Promise((resolve, reject)=> {
  console.log('start promise 1'); // 2
  resolve('Promise 1');
}).then(data=> {
  console.log(data); // 5
})

console.log('end'); // 3

/*
Importance:
1. Sync code
2. Promises
3. .nextTick()
4. .then()
5. setTimeout ()
6. setInterval()
7. setImmediate()
8. I/O operation (reading file)
*/