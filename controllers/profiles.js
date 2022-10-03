import { Profile } from "../models/profile.js"

function index(req, res) {
  Profile.find({})
  .then(profiles => {
    res.render('profiles/index', {
      title: 'Welcome to the Team',
      profiles
    })
  }).catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function show(req, res) {
  console.log('show is working!')
}

export {
  index,
  show,
}