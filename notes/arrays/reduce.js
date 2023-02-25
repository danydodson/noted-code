// 
// reduce
// 

var set1 = [1, 2, 3, 4, 5]

set1.reduce(function (accumulator, nextValue, index, array) {
  return accumulator + nextValue
})
console.log(set1)

function addTo(set1) {
  return set1.reduce(function (acc, nval) {
    return acc + nval
  })
}


let set2 = addTo([1, 2, 3, 4, 5])
console.log(set2)

function addToExtraValue(set1) {
  return set1.reduce(function (acc, nval) {
    return acc + nval
  }, 10)
}

addToExtraValue([1,1])