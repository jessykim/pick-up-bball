import { Run } from '../models/run.js'
import { Profile } from '../models/profile.js'

function index(req, res) {
  Run.find({})
  .then(runs => {
    console.log(runs, 'run')
    const updatedRuns = runs.map(run => {
      console.log('date', run.date)
      const dateNum = run.date
      const [year, month, day] = dateNum.split('-')
      const updatedDate = new Date(year, month - 1, day).toDateString()
      return {
        _id: run._id,
        starttime: run.starttime,
        date: updatedDate,
      }
    })
    console.log(updatedRuns, 'updated runs')
    res.render('runs/index', {
      title: 'All Runs',
      runs: updatedRuns
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
  Run.findById(req.params.id)
  .populate('profiles')
  .then(run => {
    Profile.find({_id: {$nin: run.profiles}})
    .then(profiles => {
      res.render('runs/show', {
        title: 'Run Info',
        run,
        profiles
      })
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/runs')
  })
}

function addProfiles(req, res) {
  Run.findById(req.params.id)
  .then(run => {
    run.profiles.push(req.body.profileId)
    run.save()
    .then(() => {
      res.redirect(`/runs/${run._id}`)
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/runs')
  })
}

function edit(req, res) {
  Run.findById(req.params.id)
  .then(run => {
    res.render('runs/edit', {
      title: 'Edit Run',
      run
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/runs')
  })
}

function update(req, res) {
  Run.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(run => {
    res.redirect(`/runs/${run._id}`)
  })
  .catch(err => {
    console.log(err)
    res.redirect('/runs')
  })
}

function deleteRun(req, res) {
  Run.findByIdAndDelete(req.params.id)
  .then(() => {
    res.redirect('/runs')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/runs')
  })
}

function deleteProfile(req, res) {
  Run.findById(req.params.runId)
  .then(run => {
    run.profiles.remove({_id: req.params.profileId})
    run.save()
    .then(() => {
      res.redirect(`/runs/${run._id}`)
    })
  })
}

export {
  index,
  newRun as new,
  create,
  show,
  addProfiles,
  edit,
  update,
  deleteRun as delete,
  deleteProfile,
}