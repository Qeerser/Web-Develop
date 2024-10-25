const express = require("express");
const bodyparser = require('body-parser')
const app = express()

app.use(bodyparser.json())

const port = 8000

let users = []
let counter = 1

//path Get /users
app.get('/users' ,(req,res) => {
  const filterUsers = users.map(user => {
    return {
      id : user.id,
      firstname : user.firstname,
      lastname : user.lastname,
      fulname : user.firstname + ' ' + user.lastname
    }
  })
  res.json(filterUsers)
})

//path = Post /users
app.post('/users',(req , res ) => {
  let user = req.body
  user.id = counter
  counter += 1

  users.push(user)
  res.json({
    message : 'add ok',
    user : user
  })
})

app.get('/users/:id' ,(req,res) => {
  let id = req.params.id
  let selectedIndex = users.findIndex(user =>user.id == id)
  
  res.json(users[selectedIndex])
})

app.patch('/user/:id' , (req, res) =>{
  let id = req.params.id
  let updateUser = req.body

  let selectedIndex = users.findIndex(user =>user.id == id)

  if(updateUser.firstname){
    users[selectedIndex].firstname = updateUser.firstname
  }
  
  if(updateUser.lastname){
    users[selectedIndex].lastname = updateUser.lastname
  }
  

  res.json({
    message : 'update user complete!',
    data:{
      user : updateUser,
      indexUpdate: selectedIndex
    }
  })
})

app.delete('/users/:id', (req,res) => {
  let id = req.params.id
  let selectedIndex = users.findIndex(user =>user.id == id)
  users.splice(selectedIndex,1)

  res.json({
    message : 'delete complete!',
    indexUpdate: selectedIndex
  })
})

app.listen(port, (req , res) => {
  console.log('http server run at '+ port)
})