var express = require('express');
var router = express.Router();
const { messages } = require("../public/javascripts/data")

router.get('/', function(req, res, next) {
    res.render('form', { title: "Mini Message Board"});
  })

router.post('/', function (req, res, next) {
    const { message, author } = req.body
    messages.push({text: message, user: author, added: new Date()})
    res.redirect('/');
})

module.exports = router;