// Lexiografic string comparator
// Here are 3 different implementations

function compare(a, b, impl) {
    const implx = impl || 1
    switch (implx) {
        case 1:
            // #### IMPLEMETATION 1
            return a.toLowerCase().localeCompare(b.toLowerCase())

        case 2:
            // #### IMPLEMETATION 2
            let aS = a.toLowerCase()
            let bS = b.toLowerCase()

            if (aS < bS)
                return -1
            else if (a > b)
                return 1
            else
                return 0

        case 3:
            // #### IMPLEMETATION 3
            const aLower = a.toLowerCase().split('')
            const bLower = b.toLowerCase().split('')

            if (bLower.length > aLower.length) {
                for (let i = 0; i < aLower.length; i++) {
                    if (aLower[i] < bLower[i])
                        return -1
                    if (aLower[i] > bLower[i])
                        return 1
                }
                return -1

            } else if (bLower.length < aLower.length) {
                for (let i = 0; i < bLower.length; i++) {
                    if (bLower[i] < aLower[i])
                        return 1
                    if (bLower[i] > aLower[i])
                        return -1
                }
                return 1

            }

            for (let i = 0; i < bLower.length; i++) {
                if (bLower[i] < aLower[i])
                    return 1
                if (bLower[i] > aLower[i])
                    return -1
            }

            return 0

    }

}

let start = new Date()
console.log(compare('a', 'afhgkjdhfg', 1) == -1, new Date() - start)

let start2 = new Date()
console.log(compare('afhgkjdhfg', 'a', 2) == 1, new Date() - start2)

let start3 = new Date()
console.log(compare('HELLO', 'hello', 3) == 0, new Date() - start3)

