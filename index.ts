import express from "express"
const app = express() 

// ask the user for type of command. 
const outputString = 
` Welcome to my todo List backend application. 
  Enter a command to get started. 
  1. Create a new todo
  2. View Todos.
  3. Update Todos. 
  4. Delete Todos. 
`

console.log(outputString)


