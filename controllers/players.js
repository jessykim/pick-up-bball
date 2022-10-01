import { Player } from "../models/player.js"

function newPlayer(req, res) {
  res.render('players/new', {
    title: 'Add Player',
  })
}

export {
  newPlayer as new,
}