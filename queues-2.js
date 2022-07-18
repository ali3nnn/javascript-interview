const baz = () => console.log("baz");
const foo = () => console.log("foo");
const zoo = () => console.log("zoo");
const start = () => {
  console.log("start");
  
  setTimeout(baz, 0); // 3 - macrotask queue is the last one in importance

  const promise = new Promise((resolve, reject) => {
    resolve("bar");
  }).then((resolve) => {
    console.log(resolve);
    process.nextTick(zoo);
  }); // 2 - promises queue (microtask queue) is 2nd in importance after nexttick queue so it runs after that

  process.nextTick(foo); // 1 - nextTick queue processes at the next iteration of event loop, no matter what.
};
start();