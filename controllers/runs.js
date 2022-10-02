import { isLoggedIn } from '../middleware/middleware.js'
import { Run } from '../models/run.js'

function index(req, res) {
  res.render('runs/index', {
    title: 'All Runs'
  })
}

function newRun(req, res) {
  console.log('adding runs!')
}

export {
  index,
  newRun as new,
}