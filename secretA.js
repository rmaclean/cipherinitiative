const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

let offset = 17711

if (offset > 26) {
    const multiplier = offset / 26
    const change = Math.floor(multiplier) * 26
    offset -= change
}

const input = "SADFIHELNVMO"
let result = ""

input.split('').forEach(letter => {
    let index = letters.indexOf(letter)
    index -= offset
    if (index < 0) {
        index = 26 + index
    }

    result += letters[index]
})

console.log(result)
