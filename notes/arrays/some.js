// 
// some
// 

let set1 = [1, 2, 3, 4, 5]

set1.some(function (value, index, array) {
  return value < 2
})

function isLessThenTwo(arr) {
  return arr.some(function (val) {
    return val < 2
  })
}

let set2 = [2, 3, 4]

console.log(isLessThenTwo(set2))
