import { Profile } from "../models/profile.js"

function index(req, res) {
  Profile.find({})
  .then(profiles => {
    res.render('profiles/index', {
      title: 'Welcome to the Team',
      profiles
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function show(req, res) {
  Profile.findById(req.params.id)
  .then(profile => {
    const isSelf = profile._id.equals(req.user.profile._id)
    res.render('profiles/show', {
      title: `${profile.name}`,
      profile,
      isSelf
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/profiles')
  })
}

function edit(req, res) {
  Profile.findById(req.params.id)
  .then(profile => {
    res.render('profiles/edit', {
      profile,
      title: 'Edit Profile'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/profiles')
  })
}

function update(req, res) {
  Profile.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(profile => {
    res.redirect(`/profiles/${profile._id}`)
  })
  .catch(err => {
    console.log(err)
    res.redirect('/profiles')
  })
}

function notesIndex(req, res) {
  Profile.findById(req.params.id)
  .then(profile => {
    res.render('profiles/notes/index', {
      title: 'Notes',
      profile
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/profiles')
  })
}

function createNote(req, res) {
  Profile.findById(req.params.id)
  .then(profile => {
    profile.notes.push(req.body)
    profile.save()
    .then(() => {
      res.render('profiles/notes/index', {
        title: 'Personal Notes',
        profile,
      })
    })
    .catch(err => {
      console.log(err)
      res.redirect('/profiles')
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/profiles')
  })
}

function goalsIndex(req, res) {
  Profile.findById(req.params.id)
  .then(profile => {
    res.render('profiles/goals/index', {
      title: 'Goals',
      profile
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/profiles')
  })
}

function createGoal(req, res) {
  Profile.findById(req.params.id)
  .then(profile => {
    profile.goals.push(req.body)
    profile.save()
    .then(() => {
      res.render('profiles/goals/index', {
        title: 'Goals',
        profile,
      })
    })
    .catch(err => {
      console.log(err)
      res.redirect('/profiles')
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/profiles')
  })
}

export {
  index,
  show,
  edit,
  update,
  notesIndex,
  createNote,
  goalsIndex,
  createGoal,
}