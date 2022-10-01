import { Player } from "../models/player.js"

function newPlayer(req, res) {
  res.render('players/new', {
    title: 'Add Player',
  })
}

function create(req, res) {
  console.log('creating a new player!');
}

export {
  newPlayer as new,
  create,
}