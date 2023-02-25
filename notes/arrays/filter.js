// filter

const teachers = [{ name: 'Tim' }, { name: 'Elie' }, { name: 'Matt' }, { name: 'Colt' }]

const filteredTeachers = teachers.filter(value => {
  return value.name.length > 3
})

// console.log(filteredTeachers)

//------------------------------------------------------------------------------------

const students = ['Tood', 'Elie', 'Tim', 'Matt', 'Colt', 'Daniel', 'Tod']

const filteredStudentsOne = students.filter(value => value.length === 4)

const filteredStudentsTwo = (arr) => {
  return arr.filter(value => {
    return value.length === 4
  })
}

// console.log(filteredStudentsOne)
// console.log(filteredStudentsTwo(students))

//------------------------------------------------------------------------------------

function removeVowels(astring) {

  const vowels = 'aeiou'

  return astring
    .toLowerCase()
    .split('')
    .filter(function (val) { return vowels.indexOf(val) === -1 })
    .join('')

}

// console.log(removeVowels('aCdEfgY'))

// ----------------------------------------------------------------------

function doubleOddNumbers(arr) {

  return arr
    .filter(function (val) { return val % 2 !== 0 })
    .map(function (val) { return val * 2 })

}

// console.log(doubleOddNumbers([1, 2, 3, 4]))
