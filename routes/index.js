const routes = require('express').Router()
const personalAssignment1Controller = require('../controllers/personalassignment1.js')

routes.get('/', personalAssignment1Controller.rileyRoute)
routes.get('/dog', personalAssignment1Controller.dogRoute)

module.exports = routes;