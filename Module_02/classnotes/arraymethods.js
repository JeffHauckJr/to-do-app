function smallOne(lower, higher) {
    if (lower > higher) {
        return higher
    } else {
        return lower
    }
}
const arr = [1, 2 ,3, 4, 5, 6]

function rotateRight(arr) {
  arr.unshift(arr.pop())
}

function rotateLeft(arr) {
    arr.push(arr.shift())
}