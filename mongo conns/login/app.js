const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const User = require('./models/User')
const bcrypt = require('bcryptjs')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

mongoose.Promise = global.Promise

mongoose.connect('mongodb://127.0.0.1/login', { useMongoClient: true }, () => {
  console.log('connected')
})

app.post('/register', (req, res) => {
  const newUser = new User()
  newUser.email = req.body.email
  newUser.password = req.body.password

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if (err) return err
      newUser.password = hash
      newUser.save().then(userSaved => {
        res.send('USER SAVED')
      }).catch(err => {
        res.send('User was not saved because ....' + err)
      })
    })
  })
})

app.post('/login', (req, res) => {
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      bcrypt.compare(req.body.password, user.password, (err, matched) => {
        if (err) return err
        if (matched) {
          res.send('USER WAS ABLE TO LOGIN')
        } else {
          res.send('USER NOT ABLE TO LOGIN')
        }
      })
    }
  })
})

app.listen(4111, () => {
  console.log('listening on port 4111')
})