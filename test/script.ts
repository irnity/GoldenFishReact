/* eslint-disable @typescript-eslint/no-unused-vars */

///////////////// Primitives : number, string, boolean
///////////////// More complex types: arrays, objects
///////////////// function types, parameters

import { type } from "@testing-library/user-event/dist/type"

///////////////// primitives

let age: number

age = 12.1

let userName: string

userName = "Andrii"

let isTeacher: boolean

isTeacher = true

///////////////// More complex types: arrays, objects

let hobbies: string[]

hobbies = ["Sports", "Cooking"]

// any is bad use of TS
// let person: any

// type alies
type Person = {
  name: string
  age: number
}

// with type alies
let person: Person

person = {
  name: "Andrii",
  age: 22,
}

// wrong
// person = {
//   isEmployee: true,
// }

let people: {
  name: string
  age: number
}[]

// with type alies
// let people: Person[]

// /////////////// Type inference

// let course:string = "React - the complete course"
// same
// let course = "React - the complete course"

// wrong
// course = 1234

let course: string | number = "React - the complete course"
course = 1

///////////////// Function & Types

function add(a: number, b: number): number {
  return a + b
}

function print(value: any) {
  console.log(value)
}

///////////////// Generics

// T stance for: generic type parameter
function insertAtBegginning<T>(array: T[], value: T) {
  const newArray = [value, ...array]
  return newArray
}

const demoArray = [1, 2, 3]

const updateArray = insertAtBegginning(demoArray, -1) // [-1, 1, 2, 3]

// for props
const Todos: React.FC<{ items: todo[] }> = (props) => {

// for props function
const NewTodo: React.FC<{ onAddTodo: (value: string) => void }> = (props) => {

// for state
const [todos, setTodos] = useState<Todo[]>([])

// for input
const todoTextInputRef = useRef<HTMLInputElement>()

// for changeHandler
const changeHandler = (event: React.KeyboardEvent<HTMLInputElement>)
<input type="text" value={value} onChange={changeHandler}/>

// for form event
const sumbitHandler = (event: React.FormEvent)

// for props children
interface PropsChildren {
  children: React.ReactNode
}