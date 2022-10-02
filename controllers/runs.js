import { Run } from '../models/run.js'

function index(req, res) {
  res.render('runs/index', {
    title: 'All Runs'
  })
}

export {
  index,
}