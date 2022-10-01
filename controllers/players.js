import { Player } from "../models/player.js"

function newPlayer(req, res) {
  Player.find({})
  .then(players => {
    res.render('players/new', {
      title: 'Add Player',
      players
    })
  })
}

function create(req, res) {
  req.body.owner = req.user.profile._id
  Player.create(req.body)
  .then(player => {
    res.redirect('/players/new')
  })

}

export {
  newPlayer as new,
  create,
}