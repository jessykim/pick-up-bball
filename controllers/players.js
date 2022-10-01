import { Player } from "../models/player.js"

function newPlayer(req, res) {
  Player.find({})
  .then(players => {
    res.render('players/new', {
      title: 'Add Player',
      players
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/players/new')
  })
}

function create(req, res) {
  req.body.owner = req.user.profile._id
  Player.create(req.body)
  .then(player => {
    res.redirect('/players/new')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/players/new')
  })
}

function index(req, res) {
  Player.find({})
  .then(players => {
    res.render('players/index', {
      title: 'Join the Team',
      players
    })
  }).catch(err => {
    console.log(err)
    res.redirect('/players')
  })
}

export {
  newPlayer as new,
  create,
  index,
}