const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

const moves = [15, 15, 6, 2, 15, 23, 8, 17, 6, 21, 15, 5, 5, 9]

let currentLetterIndex = 0 // A
let moveForward = true
let result = ""

moves.forEach(step => {
    let stepSize = step

    if (!moveForward) {
        stepSize *= -1
    }

    currentLetterIndex += stepSize
    if (currentLetterIndex < 0) {
        currentLetterIndex = 26 + currentLetterIndex
    }

    if (currentLetterIndex > 26) {
        currentLetterIndex = currentLetterIndex - 26
    }

    result += letters[currentLetterIndex]
    moveForward = !moveForward
})

console.log(result)
