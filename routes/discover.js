var express = require('express')
var router = express.Router()
var createError = require('http-errors')
var beerAPI = require('../core/beerAPI.js')

/**
 * Discover API path '/api/discover'
 */

router.route('/')
  // GET requests for this path
  .get((req, res, next) => {
    res.render('index', { title: 'Express' })
  })
  // POST requests for this path
  .post((req, res, next) => {
    var brew = req.params.body
    beerAPI.query(brew)
      .then(apiResponse => {
        res.render('index', { title: 'Express' })
      })
      .catch(() => {
        next(createError(424))
      })
  })
  // PUT requests for this path
  .put((req, res, next) => {
    res.render('index', { title: 'Express' })
  })
  // DELETE requests for this path
  .delete((req, res, next) => {
    res.render('index', { title: 'Express' })
  })

router.route('/someOtherPath')
  // GET requests for this path
  .get((req, res, next) => {
    res.render('index', { title: 'Express' })
  })

module.exports = router
