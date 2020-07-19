var express = require('express')
var router = express.Router()
const Message = require('../models/Message')
const User = require("../models/user");

// Get All Tasks
router.get('/messages', (req, res, next) => {

  Message.findAll(
    // {
    //   include: [{ model: User }],
    // }
  )
    .then(messages => {
      //console.log(tasks)
      res.json(messages)
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

router.post('/message', (req, res, next) => {
  if (!req.body.message) {
    console.log(req.body)
    res.status(401)
    res.json({
      error: 'Bad Data'
    })
  } else {
    console.log(req.body)
    Message.create(req.body)
      .then(() => {
        res.send('Task Added!')
      })
      .catch(err => {
        res.send('error: ' + err)
      })
  }
})

router.delete('/message/:id', (req, res, next) => {
  console.log(req.body)
  Message.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(() => {
      res.send('Task deleted!')
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

// Update Message
router.put('/message/:id', (req, res, next) => {
  console.log(req.params.id)
  if (!req.body.message) {
    res.status(400)
    res.json({
      error: 'Bad Data'
    })
  } else {

    Message.update(
      { message: req.body.message },
      { where: { id: req.params.id } }
    )
      .then(() => {
        res.send('Task Updated!')
      })
      .error(err => handleError(err))
  }
})

module.exports = router
