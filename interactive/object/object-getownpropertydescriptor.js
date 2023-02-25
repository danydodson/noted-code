
const object1 = {
  property1: 42,
  property2: 48,
  property3: 19,
  property4: 23,
  property5: 10,
}

const descriptor1 = Object.getOwnPropertyDescriptor(object1, 'property1')

// console.log(descriptor1.configurable)
// expected output: true

// console.log(descriptor1.value)
// expected output: 42

