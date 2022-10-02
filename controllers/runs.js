import { isLoggedIn } from '../middleware/middleware.js'
import { Run } from '../models/run.js'

function index(req, res) {
  res.render('runs/index', {
    title: 'All Runs'
  })
}

function newRun(req, res) {
  res.render('runs/new', {
    title: 'Create Run'
  })
}

export {
  index,
  newRun as new,
}