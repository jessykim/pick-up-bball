import { Run } from '../models/run.js'

function index(req, res) {
  Run.find({})
  .then(runs => {
    res.render('runs/index', {
      title: 'All Runs',
      runs,
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/runs')
  })
}

function newRun(req, res) {
  res.render('runs/new', {
    title: 'Create Run'
  })
}

function create(req, res) {
  Run.create(req.body)
  .then(run => {
    res.redirect('/runs')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/runs/new')
  })
}

function show(req, res) {
  console.log('show function working!');
}

export {
  index,
  newRun as new,
  create,
  show
}