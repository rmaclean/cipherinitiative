const outerWheel = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

const innerWheel = ["R", "U", "B", "J", "T", "X", "S", "O", "A", "L", "Q", "C", "P",
    "D", "I", "H", "K", "W", "G", "E", "N", "Z", "M", "F", "V", "Y"]

const input = "BUNTAJOUTN"
let result = ""

input.split('').forEach(letter => {
    const index = outerWheel.indexOf(letter)
    result += innerWheel[index]
})

console.log(result)