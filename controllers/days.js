import { Day } from "../models/day.js"

function index(req, res) {
  res.render('days/index', {
    title: 'Schedule'
  })
}

export {
  index,
}