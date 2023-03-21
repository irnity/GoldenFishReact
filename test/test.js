/* eslint-disable no-unused-vars */
const object = {
  name: "John",
  age: 30,
  city: "New York",
}

const array = ["apple", "banana", "orange"]

const arrayOfObjects = [
  { name: "John", age: 30, email: "john@example.com" },
  { name: "Alice", age: 25, email: "alice@example.com" },
  { name: "Bob", age: 40, email: "bob@example.com" },
]

// how to find if atleast one element of array === string
const arr = ["apple", "banana", "cherry"]
const str = "banana"
const hasString = arr.some((element) => element === str)
console.log(hasString) // Output: true
