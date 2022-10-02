import { Player } from "../models/player.js"

function index(req, res) {
  Player.find({})
  .then(players => {
    res.render('players/index', {
      title: 'Welcome to the Team',
      players
    })
  }).catch(err => {
    console.log(err)
    res.redirect('/players')
  })
}

export {
  index,
}