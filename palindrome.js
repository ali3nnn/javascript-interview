function checkIfPalindrome(input) {
    let left = String(input)
    let right = String(input).split('').reverse().join('')
    return left == right
}

console.log(checkIfPalindrome("alexela"))