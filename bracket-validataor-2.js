function validator(brackets) {
    let ground = 0
    for (let bracket of brackets.split('')) {
        if (bracket === '(')
            ground++
        else
            if (ground === 0)
                return false
            else
                ground--
    }
    return ground === 0 ? true : false
}

const goodBrackets = '(((())))';
const badBrackets = '(()())))';
const veryBadBrackets = '(()())()))';

console.log(validator(goodBrackets))
console.log(validator(badBrackets))
console.log(validator(veryBadBrackets))