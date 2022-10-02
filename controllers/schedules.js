import { Schedule } from '../models/schedule.js'
import { Profile } from '../models/profile.js'

function index(req, res) {
  res.render('schedules/index', {
    title: 'Schedule'
  })
}

function sunday(req, res) {
  // console.log(Player.findById(req.params.id));
  // .populate('players')
  // .then(() => {
  //   Player.find({_id})
  //   .then(players => {
    //   })
    // })
        res.render('schedules/sunday', {
          title: 'Sunday',
        })
  }

function monday(req, res) {
  res.render('schedules/monday', {
    title: 'Monday'
  })
}

function tuesday(req, res) {
  res.render('schedules/tuesday', {
    title: 'Tuesday'
  })
}

function wednesday(req, res) {
  res.render('schedules/wednesday', {
    title: 'Wednesday'
  })
}

function thursday(req, res) {
  res.render('schedules/thursday', {
    title: 'Thursday'
  })
}

function friday(req, res) {
  res.render('schedules/friday', {
    title: 'Friday'
  })
}

function saturday(req, res) {
  res.render('schedules/saturday', {
    title: 'Saturday'
  })
}

export {
  index,
  sunday,
  monday,
  tuesday,
  wednesday,
  thursday,
  friday,
  saturday
}