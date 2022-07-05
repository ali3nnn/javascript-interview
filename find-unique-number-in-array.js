/*
This is one I haven't met so far in interviews,
but if it comes, you wouldn't know how to do it unless you see it

The trick here is the XOR(^) operation which basically helps to cancel duplicate values and return the unique one. 
It must be just one unique value, not two or more.
2^2=0
3^3=0
0^7=7
*/

const array = [1, 2, 3, 7, 3, 2, 1];

const result = array.reduce((prev, next) => {
    // console.log(prev, next, parseInt(prev).toString(2), parseInt(next).toString(2), parseInt(prev).toString(2) ^ parseInt(next).toString(2))
    return prev ^ next
})

console.log(result)