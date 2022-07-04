function validator(brackets) {
    
    let map = {
        ")": "(",
        "]": "[",
        "}": "{",
        ">": "<"
    }

    let stack = []
    for (let bracket of brackets.split('')) {
        if(Object.values(map).includes(bracket)) 
            stack.push(bracket)
        else if (stack[stack.length-1] === map[bracket])
            stack.pop()
        else
            return false
    }

    return stack.length ? false : true

}

const goodBrackets = '((((<[{}]>))))';
const badBrackets = '(()())))';
const badBrackets2 = '((((<)>)))';
const veryBadBrackets = '(()())()))';

console.log(validator(goodBrackets) == true)
console.log(validator(badBrackets) == false)
console.log(validator(badBrackets2) == false)
console.log(validator(veryBadBrackets) == false)

